import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { getSource } from '../datasource';

// A position in the data source. The deck is a shuffled list of these — one per
// eligible card — so every card has an equal chance regardless of how many peers
// its section has.
type CardLocation = {
  chapterKey: string;
  sectionKey: string;
  groupIndex: number;
  cardIndex: number;
};

// The card currently on screen, plus the per-view choices (which phrase, which
// side first) that are re-rolled every time a card is shown.
type HistoryEntry = CardLocation & {
  phrasesIndex: number;
  showQuestionFirst: boolean;
};

type State = {
  deck: CardLocation[];
  cursor: number;
  current: HistoryEntry;
  step: number;
  enabledSections: string[];
};

type Action =
  | { type: 'ADVANCE'; maxStep: number; deck: CardLocation[]; cursor: number; current: HistoryEntry }
  | { type: 'PREVIOUS'; current: HistoryEntry }
  | { type: 'RESTART'; deck: CardLocation[]; current: HistoryEntry }
  | { type: 'SET_ENABLED_SECTIONS'; enabledSections: string[]; deck: CardLocation[]; current: HistoryEntry };

// Layer 1 — pure. No closure access. Exported for direct testability.
// Impure choices (shuffled decks, re-rolled entries) are computed by the action
// creators and handed in, so transitions here stay deterministic.
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADVANCE': {
      // Each card is revealed in steps; only once the steps are exhausted do we
      // move the cursor to the next card in the deck.
      if (state.step < action.maxStep) return { ...state, step: state.step + 1 };
      return { ...state, deck: action.deck, cursor: action.cursor, current: action.current, step: 0 };
    }
    case 'PREVIOUS': {
      if (state.cursor === 0) return state;
      return { ...state, cursor: state.cursor - 1, current: action.current, step: 0 };
    }
    case 'RESTART':
      return { ...state, deck: action.deck, cursor: 0, current: action.current, step: 0 };
    case 'SET_ENABLED_SECTIONS':
      return {
        ...state,
        enabledSections: action.enabledSections,
        deck: action.deck,
        cursor: 0,
        current: action.current,
        step: 0,
      };
  }
};

// Layer 2 — impurity quarantined here.
const allSectionKeys = (): string[] =>
  Object.values(getSource().cards).flatMap(chapter => Object.keys(chapter));

// Flatten every card in the enabled sections into a flat list of locations.
// Enumerating per-card (rather than picking section → group → card at random) is
// what gives each card uniform probability.
const eligibleCards = (enabledSections: string[]): CardLocation[] => {
  const enabled = new Set(enabledSections);
  const out: CardLocation[] = [];
  for (const [chapterKey, chapter] of Object.entries(getSource().cards)) {
    for (const [sectionKey, groups] of Object.entries(chapter)) {
      if (!enabled.has(sectionKey)) continue;
      groups.forEach((group, groupIndex) => {
        group.cards.forEach((_card, cardIndex) => {
          out.push({ chapterKey, sectionKey, groupIndex, cardIndex });
        });
      });
    }
  }
  return out;
};

// Fisher–Yates: unbiased in-place shuffle on a copy.
const shuffle = <T>(items: readonly T[]): T[] => {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
};

const buildDeck = (enabledSections: string[]): CardLocation[] => shuffle(eligibleCards(enabledSections));

const cardAt = (loc: CardLocation) =>
  getSource().cards[loc.chapterKey]![loc.sectionKey]![loc.groupIndex]!.cards[loc.cardIndex]!;

// Turn a deck location into a displayable entry, re-rolling the phrase and the
// question/answer orientation for this viewing. Every card is guaranteed at least
// one phrase by the Card type, so the index is always valid.
const rollEntry = (loc: CardLocation): HistoryEntry => {
  const card = cardAt(loc);
  const phrasesIndex = Math.floor(Math.random() * card.phrases.length);
  return { ...loc, phrasesIndex, showQuestionFirst: Math.random() < 0.5 };
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
  const initialDeck = buildDeck(initialEnabled);
  // Always seed `current` with a real card so the getters render even when no
  // sections are enabled (the UI hides it via isEmpty).
  const initialLocation = initialDeck[0] ?? eligibleCards(allSectionKeys())[0]!;
  const state = ref<State>({
    deck: initialDeck,
    cursor: 0,
    current: rollEntry(initialLocation),
    step: 0,
    enabledSections: initialEnabled,
  });

  const dispatch = (action: Action) => {
    state.value = reducer(state.value, action);
  };

  const currentGroup = computed(() => getSource().cards[state.value.current.chapterKey]![state.value.current.sectionKey]![state.value.current.groupIndex]!);
  const currentCard = computed(() => currentGroup.value.cards[state.value.current.cardIndex]!);
  const currentPhrase = computed(() => currentCard.value.phrases[state.value.current.phrasesIndex]!);
  const currentChapter = computed(() => state.value.current.chapterKey);
  const currentSection = computed(() => state.value.current.sectionKey);
  const currentSubTitle = computed(() => currentGroup.value.subTitle);
  const canGoPrevious = computed(() => state.value.cursor > 0);
  const allChapters = computed(() => Object.keys(getSource().cards));
  const allSections = computed(() => allSectionKeys());
  const isEmpty = computed(() => state.value.enabledSections.length === 0);
  const canRestart = computed(() => state.value.step > 0 || state.value.cursor > 0);

  const advance = () => {
    const s = state.value;
    if (s.deck.length === 0) return;
    const maxStep = 3;
    // Only the "move to the next card" branch needs a fresh entry (and possibly a
    // reshuffle); during a step increment the reducer ignores these, so skip the
    // work — mirrors the reducer's own step guard.
    const moving = s.step >= maxStep;
    const nextCursor = s.cursor + 1;
    const wrap = nextCursor >= s.deck.length;
    const deck = moving && wrap ? buildDeck(s.enabledSections) : s.deck;
    const cursor = wrap ? 0 : nextCursor;
    const current = moving ? rollEntry(deck[cursor]!) : s.current;
    dispatch({ type: 'ADVANCE', maxStep, deck, cursor, current });
  };

  const previous = () => {
    const s = state.value;
    if (s.cursor === 0) return;
    dispatch({ type: 'PREVIOUS', current: rollEntry(s.deck[s.cursor - 1]!) });
  };

  const restart = () => {
    const deck = buildDeck(state.value.enabledSections);
    const current = deck.length > 0 ? rollEntry(deck[0]!) : state.value.current;
    dispatch({ type: 'RESTART', deck, current });
  };

  const setEnabledSections = (keys: string[]) => {
    const deck = buildDeck(keys);
    const current = deck.length > 0 ? rollEntry(deck[0]!) : state.value.current;
    dispatch({ type: 'SET_ENABLED_SECTIONS', enabledSections: keys, deck, current });
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
    canRestart,
    allChapters,
    allSections,
    isEmpty,
    advance,
    previous,
    restart,
    setEnabledSections,
  };
});
