import { describe, it, expect } from 'vitest';
import { reducer } from '../stores/flashcards';

type State = Parameters<typeof reducer>[0];
type Entry = State['current'];
type Loc = State['deck'][number];

const loc = (sectionKey = 'Basic Grammar', cardIndex = 0): Loc => ({
  chapterKey: 'Chapter 1',
  sectionKey,
  groupIndex: 0,
  cardIndex,
});

const entry = (sectionKey = 'Basic Grammar', cardIndex = 0, phrasesIndex = 0, showQuestionFirst = true): Entry => ({
  ...loc(sectionKey, cardIndex),
  phrasesIndex,
  showQuestionFirst,
});

// A three-card deck the cursor walks through.
const deck: Loc[] = [loc('Basic Grammar', 0), loc('Basic Grammar', 1), loc('Numbers and Time', 0)];
// A fresh deck handed to RESTART / SET_ENABLED_SECTIONS / a reshuffle on wrap.
const newDeck: Loc[] = [loc('Numbers and Time', 5), loc('Common Expressions', 0)];
const newEntry = entry('Numbers and Time', 5, 1, false);

const mkState = (overrides: Partial<State> = {}): State => ({
  deck,
  cursor: 0,
  current: entry(),
  step: 0,
  enabledSections: ['Basic Grammar', 'Numbers and Time'],
  ...overrides,
});

const advance = (
  state: State,
  maxStep = 3,
  payload: { deck?: Loc[]; cursor?: number; current?: Entry } = {},
): State =>
  reducer(state, {
    type: 'ADVANCE',
    maxStep,
    deck: payload.deck ?? state.deck,
    cursor: payload.cursor ?? state.cursor + 1,
    current: payload.current ?? newEntry,
  });

const previous = (state: State, current: Entry = entry('Basic Grammar', 0)): State =>
  reducer(state, { type: 'PREVIOUS', current });

const restart = (state: State, d: Loc[] = newDeck, current: Entry = newEntry): State =>
  reducer(state, { type: 'RESTART', deck: d, current });

const setSections = (state: State, sections: string[], d: Loc[] = newDeck, current: Entry = newEntry): State =>
  reducer(state, { type: 'SET_ENABLED_SECTIONS', enabledSections: sections, deck: d, current });

describe('reducer — ADVANCE', () => {
  it('increments step from 0 to 1 without changing card, cursor, or deck', () => {
    const s = advance(mkState({ step: 0 }));
    expect(s.step).toBe(1);
    expect(s.current).toEqual(entry());
    expect(s.cursor).toBe(0);
    expect(s.deck).toBe(deck);
  });

  it('increments step from 1 to 2', () => {
    expect(advance(mkState({ step: 1 })).step).toBe(2);
  });

  it('increments step from 2 to 3', () => {
    expect(advance(mkState({ step: 2 })).step).toBe(3);
  });

  it('at step 3: moves the cursor forward, loads the new entry, resets step to 0', () => {
    const s = advance(mkState({ current: entry('Basic Grammar', 0, 0, true), step: 3, cursor: 0 }), 3, {
      cursor: 1,
      current: newEntry,
    });
    expect(s.step).toBe(0);
    expect(s.cursor).toBe(1);
    expect(s.current).toEqual(newEntry);
    expect(s.deck).toBe(deck);
  });

  it('at step 3 on the last card: accepts a reshuffled deck and wraps the cursor to 0', () => {
    const s = advance(mkState({ step: 3, cursor: deck.length - 1 }), 3, {
      deck: newDeck,
      cursor: 0,
      current: newEntry,
    });
    expect(s.cursor).toBe(0);
    expect(s.deck).toBe(newDeck);
    expect(s.current).toEqual(newEntry);
    expect(s.step).toBe(0);
  });

  it('preserves enabledSections across ADVANCE', () => {
    const sections = ['Numbers and Time', 'Common Expressions'];
    const s = advance(mkState({ step: 3, enabledSections: sections }));
    expect(s.enabledSections).toEqual(sections);
  });

  it('does not mutate the original state object', () => {
    const original = mkState({ step: 0 });
    const frozen = Object.freeze({ ...original, deck: Object.freeze([...original.deck]) });
    const result = advance(frozen as State);
    expect(result).not.toBe(frozen);
    expect(result.step).toBe(1);
  });

  it('honors a custom maxStep: increments while step < maxStep, then loads new entry at step == maxStep', () => {
    let s = mkState({ step: 0 });
    s = advance(s, 7);
    expect(s.step).toBe(1);
    s = advance({ ...s, step: 6 }, 7);
    expect(s.step).toBe(7);
    s = advance({ ...s, step: 7 }, 7, { cursor: 1, current: newEntry });
    expect(s.step).toBe(0);
    expect(s.cursor).toBe(1);
    expect(s.current).toEqual(newEntry);
  });
});

describe('reducer — PREVIOUS', () => {
  it('returns the same state when the cursor is at 0', () => {
    const s = mkState({ step: 2, cursor: 0 });
    expect(previous(s)).toBe(s);
  });

  it('decrements the cursor, loads the provided entry, resets step to 0', () => {
    const restored = entry('Basic Grammar', 0, 0, true);
    const s = previous(mkState({ current: newEntry, step: 2, cursor: 1 }), restored);
    expect(s.step).toBe(0);
    expect(s.cursor).toBe(0);
    expect(s.current).toEqual(restored);
    expect(s.deck).toBe(deck);
  });

  it('preserves enabledSections', () => {
    const sections = ['Numbers and Time'];
    const s = previous(mkState({ cursor: 1, enabledSections: sections }));
    expect(s.enabledSections).toEqual(sections);
  });

  it('does not mutate the original state', () => {
    const original = mkState({ cursor: 2 });
    const result = previous(original);
    expect(result).not.toBe(original);
    expect(original.cursor).toBe(2);
  });
});

describe('reducer — RESTART', () => {
  it('installs the new deck, resets cursor and step to 0, loads the new entry', () => {
    const s = restart(mkState({ current: entry('Basic Grammar', 1, 2, true), step: 3, cursor: 2 }));
    expect(s.deck).toBe(newDeck);
    expect(s.cursor).toBe(0);
    expect(s.current).toEqual(newEntry);
    expect(s.step).toBe(0);
  });

  it('preserves enabledSections', () => {
    const sections = ['Common Expressions'];
    const s = restart(mkState({ enabledSections: sections }));
    expect(s.enabledSections).toEqual(sections);
  });
});

describe('reducer — SET_ENABLED_SECTIONS', () => {
  it('updates enabledSections, installs the new deck, resets cursor and step, loads new entry', () => {
    const newSections = ['Numbers and Time', 'Common Expressions'];
    const s = setSections(mkState({ current: entry('Basic Grammar', 0, 0, true), step: 2, cursor: 1 }), newSections);
    expect(s.enabledSections).toEqual(newSections);
    expect(s.deck).toBe(newDeck);
    expect(s.cursor).toBe(0);
    expect(s.current).toEqual(newEntry);
    expect(s.step).toBe(0);
  });

  it('accepts an empty enabledSections array (empty state)', () => {
    const s = setSections(mkState(), [], [], entry('Basic Grammar', 0, 0, true));
    expect(s.enabledSections).toEqual([]);
    expect(s.deck).toEqual([]);
    expect(s.cursor).toBe(0);
    expect(s.step).toBe(0);
  });

  it('does not mutate the original state', () => {
    const original = mkState();
    const result = setSections(original, ['Numbers and Time']);
    expect(result).not.toBe(original);
    expect(original.enabledSections).toEqual(['Basic Grammar', 'Numbers and Time']);
  });
});

describe('reducer — navigation flows', () => {
  it('advancing through the steps then once more moves the cursor; previous restores it at step 0', () => {
    let s = mkState({ current: entry('Basic Grammar', 0, 0, true), step: 0, cursor: 0 });
    s = advance(s); // 0 → 1
    s = advance({ ...s, step: 1 }); // 1 → 2
    s = advance({ ...s, step: 2 }); // 2 → 3
    expect(s.cursor).toBe(0);
    s = advance({ ...s, step: 3 }, 3, { cursor: 1, current: newEntry }); // moves
    expect(s.cursor).toBe(1);
    expect(s.current).toEqual(newEntry);

    const restored = entry('Basic Grammar', 0, 0, true);
    s = previous(s, restored);
    expect(s.cursor).toBe(0);
    expect(s.step).toBe(0);
    expect(s.current).toEqual(restored);
  });
});
