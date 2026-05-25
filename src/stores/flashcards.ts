import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { source } from '../../data/source';

type HistoryEntry = {
  chapterKey: string;
  sectionKey: string;
  groupIndex: number;
  cardIndex: number;
  phrasesIndex: number;
  showQuestionFirst: boolean;
};

type State = {
  current: HistoryEntry;
  step: number;
  back: HistoryEntry[];
  forward: HistoryEntry[];
  enabledSections: string[];
};

type Action =
  | { type: 'ADVANCE'; newEntry: HistoryEntry }
  | { type: 'PREVIOUS' }
  | { type: 'RESTART'; newEntry?: HistoryEntry }
  | { type: 'SET_ENABLED_SECTIONS'; enabledSections: string[]; newEntry?: HistoryEntry };

// Layer 1 — pure. No closure access. Exported for direct testability.
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADVANCE': {
      if (state.step < 3) return { ...state, step: state.step + 1 };
      const back = [...state.back, state.current];
      if (state.forward.length > 0) {
        return {
          ...state,
          current: state.forward[state.forward.length - 1]!,
          step: 1,
          back,
          forward: state.forward.slice(0, -1),
        };
      }
      return { ...state, current: action.newEntry, step: 0, back, forward: [] };
    }
    case 'PREVIOUS': {
      if (state.back.length === 0) return state;
      return {
        ...state,
        current: state.back[state.back.length - 1]!,
        step: 0,
        back: state.back.slice(0, -1),
        forward: [...state.forward, state.current],
      };
    }
    case 'RESTART':
      return {
        ...state,
        current: action.newEntry ?? state.current,
        step: 0,
        back: [],
        forward: [],
      };
    case 'SET_ENABLED_SECTIONS':
      // Only allowed when both navigation stacks are empty (i.e. after a fresh Restart).
      if (state.back.length > 0 || state.forward.length > 0) return state;
      return {
        ...state,
        enabledSections: action.enabledSections,
        current: action.newEntry ?? state.current,
        step: 0,
      };
  }
};

// Layer 2 — impurity quarantined here.
const allSectionKeys = (): string[] =>
  Object.values(source.cards).flatMap(chapter => Object.keys(chapter));

const chapterForSection = (sectionKey: string): string => {
  for (const [chapterKey, chapter] of Object.entries(source.cards)) {
    if (sectionKey in chapter) return chapterKey;
  }
  throw new Error(`Section not found: ${sectionKey}`);
};

const randomEntry = (enabledSections: string[]): HistoryEntry => {
  const pool = enabledSections.length > 0 ? enabledSections : allSectionKeys();
  const sectionKey = pool[Math.floor(Math.random() * pool.length)]!;
  const chapterKey = chapterForSection(sectionKey);
  const groups = source.cards[chapterKey]![sectionKey]!;
  const groupIndex = Math.floor(Math.random() * groups.length);
  const groupCards = groups[groupIndex]!.cards;
  const cardIndex = Math.floor(Math.random() * groupCards.length);
  const phrasesIndex = Math.floor(Math.random() * groupCards[cardIndex]!.phrases.length);
  const showQuestionFirst = Math.random() < 0.5;
  return { chapterKey, sectionKey, groupIndex, cardIndex, phrasesIndex, showQuestionFirst };
};

const LS_KEY = 'flashcards.enabledSections';

const loadEnabledSections = (): string[] => {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw === null) return allSectionKeys();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return allSectionKeys();
    const valid = new Set(allSectionKeys());
    return parsed.filter((k): k is string => typeof k === 'string' && valid.has(k));
  } catch {
    return allSectionKeys();
  }
};

const saveEnabledSections = (keys: string[]): void => {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(keys));
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — silently fail
  }
};

// Layer 3 — store. Single mutation site is `dispatch`; side effects (localStorage, randomness)
// live in action creators.
export const useFlashcardsStore = defineStore('flashcards', () => {
  const initialEnabled = loadEnabledSections();
  const state = ref<State>({
    current: randomEntry(initialEnabled),
    step: 0,
    back: [],
    forward: [],
    enabledSections: initialEnabled,
  });

  const dispatch = (action: Action) => {
    state.value = reducer(state.value, action);
  };

  const currentGroup    = computed(() => source.cards[state.value.current.chapterKey]![state.value.current.sectionKey]![state.value.current.groupIndex]!);
  const currentCard     = computed(() => currentGroup.value.cards[state.value.current.cardIndex]!);
  const currentPhrase   = computed(() => currentCard.value.phrases[state.value.current.phrasesIndex]!);
  const currentChapter  = computed(() => state.value.current.chapterKey);
  const currentSection  = computed(() => state.value.current.sectionKey);
  const currentSubTitle = computed(() => currentGroup.value.subTitle);
  const canGoPrevious     = computed(() => state.value.back.length > 0);
  const allChapters       = computed(() => Object.keys(source.cards));
  const allSections       = computed(() => allSectionKeys());
  const isEmpty           = computed(() => state.value.enabledSections.length === 0);

  const advance = () => {
    if (state.value.enabledSections.length === 0) return;
    dispatch({ type: 'ADVANCE', newEntry: randomEntry(state.value.enabledSections) });
  };

  const previous = () => dispatch({ type: 'PREVIOUS' });

  const restart = () => {
    const newEntry = state.value.enabledSections.length > 0
      ? randomEntry(state.value.enabledSections)
      : undefined;
    dispatch({ type: 'RESTART', newEntry });
  };

  const setEnabledSections = (keys: string[]) => {
    const s = state.value;
    if (s.back.length > 0 || s.forward.length > 0) return;
    const newEntry = keys.length > 0 ? randomEntry(keys) : undefined;
    dispatch({ type: 'SET_ENABLED_SECTIONS', enabledSections: keys, newEntry });
    saveEnabledSections(keys);
  };

  return {
    state,
    currentCard,
    currentPhrase,
    currentChapter,
    currentSection,
    currentSubTitle,
    canGoPrevious,
    allChapters,
    allSections,
    isEmpty,
    advance,
    previous,
    restart,
    setEnabledSections,
  };
});
