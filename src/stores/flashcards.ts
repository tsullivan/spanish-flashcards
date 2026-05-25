import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { source } from '../../data/source';

type HistoryEntry = {
  questionIndex: number;
  phrasesIndex: number;
  showQuestionFirst: boolean;
};

type State = {
  current: HistoryEntry;
  step: number;
  back: HistoryEntry[];
  forward: HistoryEntry[];
};

type Action =
  | { type: 'ADVANCE'; newEntry: HistoryEntry }
  | { type: 'PREVIOUS' }
  | { type: 'RESTART'; newEntry: HistoryEntry };

// Layer 1 — pure. No closure access. Exported for direct testability.
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADVANCE': {
      if (state.step < 3) return { ...state, step: state.step + 1 };
      const back = [...state.back, state.current];
      if (state.forward.length > 0) {
        return {
          current: state.forward[state.forward.length - 1]!,
          step: 1,
          back,
          forward: state.forward.slice(0, -1),
        };
      }
      return { current: action.newEntry, step: 0, back, forward: [] };
    }
    case 'PREVIOUS': {
      if (state.back.length === 0) return state;
      return {
        current: state.back[state.back.length - 1]!,
        step: 0,
        back: state.back.slice(0, -1),
        forward: [...state.forward, state.current],
      };
    }
    case 'RESTART':
      return { current: action.newEntry, step: 0, back: [], forward: [] };
  }
};

// Layer 2 — impurity quarantined here.
const randomEntry = (): HistoryEntry => {
  const questionIndex = Math.floor(Math.random() * source.cards.length);
  const phrasesIndex = Math.floor(Math.random() * source.cards[questionIndex]!.phrases.length);
  const showQuestionFirst = Math.random() < 0.5;
  return { questionIndex, phrasesIndex, showQuestionFirst };
};

// Layer 3 — store. Single mutation site is `dispatch`; everything else is read-only or pure.
export const useFlashcardsStore = defineStore('flashcards', () => {
  const state = ref<State>({
    current: randomEntry(),
    step: 0,
    back: [],
    forward: [],
  });

  const dispatch = (action: Action) => {
    state.value = reducer(state.value, action);
  };

  const currentCard   = computed(() => source.cards[state.value.current.questionIndex]!);
  const currentPhrase = computed(() => currentCard.value.phrases[state.value.current.phrasesIndex]!);
  const canGoPrevious = computed(() => state.value.back.length > 0);

  // Action creators — inject impurity (randomness) and dispatch. Never touch state directly.
  const advance  = () => dispatch({ type: 'ADVANCE',  newEntry: randomEntry() });
  const previous = () => dispatch({ type: 'PREVIOUS' });
  const restart  = () => dispatch({ type: 'RESTART',  newEntry: randomEntry() });

  return { state, currentCard, currentPhrase, canGoPrevious, advance, previous, restart };
});
