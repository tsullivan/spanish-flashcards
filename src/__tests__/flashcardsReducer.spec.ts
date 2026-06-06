import { describe, it, expect } from 'vitest';
import { reducer } from '../stores/flashcards';

type State = Parameters<typeof reducer>[0];
type Entry = State['current'];

const entry = (sectionKey = 'Basic Grammar', cardIndex = 0, phrasesIndex = 0, showQuestionFirst = true): Entry => ({
  chapterKey: 'Chapter 1',
  sectionKey,
  groupIndex: 0,
  cardIndex,
  phrasesIndex,
  showQuestionFirst,
});
const newEntry = entry('Numbers and Time', 5, 1, false);

const mkState = (overrides: Partial<State> = {}): State => ({
  current: entry(),
  step: 0,
  back: [],
  forward: [],
  enabledSections: ['Basic Grammar', 'Numbers and Time'],
  ...overrides,
});

const advance = (state: State, maxStep = 3): State => reducer(state, { type: 'ADVANCE', newEntry, maxStep });
const previous = (state: State): State => reducer(state, { type: 'PREVIOUS' });
const restart = (state: State, entry?: Entry): State => reducer(state, { type: 'RESTART', newEntry: entry });
const setSections = (state: State, sections: string[], entry?: Entry): State =>
  reducer(state, { type: 'SET_ENABLED_SECTIONS', enabledSections: sections, newEntry: entry });

describe('reducer — ADVANCE', () => {
  it('increments step from 0 to 1 without changing card or stacks', () => {
    const s = advance(mkState({ step: 0 }));
    expect(s.step).toBe(1);
    expect(s.current).toEqual(entry());
    expect(s.back).toEqual([]);
    expect(s.forward).toEqual([]);
  });

  it('increments step from 1 to 2', () => {
    expect(advance(mkState({ step: 1 })).step).toBe(2);
  });

  it('increments step from 2 to 3', () => {
    expect(advance(mkState({ step: 2 })).step).toBe(3);
  });

  it('at step 3 with empty forward: uses newEntry, pushes current to back, resets step to 0', () => {
    const original = entry('Basic Grammar', 1, 2, true);
    const s = advance(mkState({ current: original, step: 3 }));
    expect(s.step).toBe(0);
    expect(s.current).toEqual(newEntry);
    expect(s.back).toEqual([original]);
    expect(s.forward).toEqual([]);
  });

  it('at step 3 with existing back: appends current to back before loading new card', () => {
    const existing = entry('Numbers and Time', 9, 0, false);
    const original = entry('Basic Grammar', 1, 2, true);
    const s = advance(mkState({ current: original, step: 3, back: [existing] }));
    expect(s.back).toEqual([existing, original]);
    expect(s.current).toEqual(newEntry);
  });

  it('at step 3 with non-empty forward: pops forward, pushes current to back, resets step to 0', () => {
    const forward1 = entry('Basic Grammar', 7, 0, true);
    const forward2 = entry('Numbers and Time', 8, 0, false);
    const original = entry('Basic Grammar', 1, 2, true);
    const s = advance(mkState({ current: original, step: 3, forward: [forward1, forward2] }));
    expect(s.step).toBe(0);
    expect(s.current).toEqual(forward2);
    expect(s.back).toEqual([original]);
    expect(s.forward).toEqual([forward1]);
  });

  it('at step 3 with forward: ignores newEntry entirely', () => {
    const forwardEntry = entry('Basic Grammar', 7, 0, true);
    const s = advance(mkState({ step: 3, forward: [forwardEntry] }));
    expect(s.current).toEqual(forwardEntry);
    expect(s.current).not.toEqual(newEntry);
  });

  it('preserves enabledSections across ADVANCE', () => {
    const sections = ['Numbers and Time', 'Common Expressions'];
    const s = advance(mkState({ step: 3, enabledSections: sections }));
    expect(s.enabledSections).toEqual(sections);
  });

  it('does not mutate the original state object', () => {
    const original = mkState({ step: 0 });
    const frozen = Object.freeze({ ...original, back: Object.freeze([...original.back]) });
    const result = reducer(frozen as State, { type: 'ADVANCE', newEntry, maxStep: 3 });
    expect(result).not.toBe(frozen);
    expect(result.step).toBe(1);
  });

  it('honors a custom maxStep: increments while step < maxStep, then loads new entry at step == maxStep', () => {
    let s = mkState({ step: 0 });
    s = advance(s, 7);
    expect(s.step).toBe(1);
    s = advance({ ...s, step: 6 }, 7);
    expect(s.step).toBe(7);
    s = advance({ ...s, step: 7 }, 7);
    expect(s.step).toBe(0);
    expect(s.current).toEqual(newEntry);
  });
});

describe('reducer — PREVIOUS', () => {
  it('returns the same state when back is empty', () => {
    const s = mkState({ step: 2 });
    expect(previous(s)).toBe(s);
  });

  it('pops last entry from back, pushes current to forward, resets step to 0', () => {
    const backEntry = entry('Numbers and Time', 3, 1, false);
    const original = entry('Basic Grammar', 0, 0, true);
    const s = previous(mkState({ current: original, step: 2, back: [backEntry] }));
    expect(s.step).toBe(0);
    expect(s.current).toEqual(backEntry);
    expect(s.back).toEqual([]);
    expect(s.forward).toEqual([original]);
  });

  it('only pops the last back entry when multiple exist', () => {
    const back1 = entry('Basic Grammar', 1, 0, true);
    const back2 = entry('Numbers and Time', 2, 0, false);
    const s = previous(mkState({ back: [back1, back2] }));
    expect(s.current).toEqual(back2);
    expect(s.back).toEqual([back1]);
  });

  it('appends current to existing forward stack', () => {
    const existing = entry('Common Expressions', 9, 0, true);
    const original = entry('Basic Grammar', 0, 0, false);
    const s = previous(mkState({
      current: original,
      back: [entry('Numbers and Time', 1, 0, true)],
      forward: [existing],
    }));
    expect(s.forward).toEqual([existing, original]);
  });

  it('preserves enabledSections', () => {
    const sections = ['Numbers and Time'];
    const s = previous(mkState({ back: [entry()], enabledSections: sections }));
    expect(s.enabledSections).toEqual(sections);
  });

  it('does not mutate the original state', () => {
    const backEntry = entry('Numbers and Time', 3, 1, false);
    const original = mkState({ back: [backEntry] });
    const result = previous(original);
    expect(result).not.toBe(original);
    expect(original.back).toEqual([backEntry]);
  });
});

describe('reducer — RESTART', () => {
  it('uses newEntry as current, resets step to 0, clears both stacks', () => {
    const s = restart(mkState({
      current: entry('Basic Grammar', 1, 2, true),
      step: 3,
      back: [entry('Numbers and Time', 4, 0, false)],
      forward: [entry('Common Expressions', 5, 1, true)],
    }), newEntry);
    expect(s.current).toEqual(newEntry);
    expect(s.step).toBe(0);
    expect(s.back).toEqual([]);
    expect(s.forward).toEqual([]);
  });

  it('preserves enabledSections', () => {
    const sections = ['Common Expressions'];
    const s = restart(mkState({ enabledSections: sections }), newEntry);
    expect(s.enabledSections).toEqual(sections);
  });

  it('with undefined newEntry: keeps current, still clears stacks (empty-sections case)', () => {
    const original = entry('Basic Grammar', 1, 2, true);
    const s = restart(mkState({
      current: original,
      step: 3,
      back: [entry('Numbers and Time', 4, 0, false)],
      enabledSections: [],
    }));
    expect(s.current).toEqual(original);
    expect(s.step).toBe(0);
    expect(s.back).toEqual([]);
    expect(s.forward).toEqual([]);
  });
});

describe('reducer — SET_ENABLED_SECTIONS', () => {
  it('updates enabledSections, replaces current with newEntry, and resets step to 0', () => {
    const original = entry('Basic Grammar', 0, 0, true);
    const newSections = ['Numbers and Time', 'Common Expressions'];
    const s = setSections(mkState({ current: original, step: 2 }), newSections, newEntry);
    expect(s.enabledSections).toEqual(newSections);
    expect(s.current).toEqual(newEntry);
    expect(s.step).toBe(0);
  });

  it('clears back and forward stacks even when non-empty', () => {
    const s = mkState({
      back: [entry('Basic Grammar', 1, 0, true)],
      forward: [entry('Numbers and Time', 2, 0, false)],
    });
    const result = setSections(s, ['Numbers and Time'], newEntry);
    expect(result.back).toEqual([]);
    expect(result.forward).toEqual([]);
    expect(result.enabledSections).toEqual(['Numbers and Time']);
  });

  it('accepts an empty enabledSections array (empty state)', () => {
    const original = entry('Basic Grammar', 0, 0, true);
    const s = setSections(mkState({ current: original }), [], undefined);
    expect(s.enabledSections).toEqual([]);
    expect(s.current).toEqual(original);
    expect(s.step).toBe(0);
  });

  it('does not mutate the original state', () => {
    const original = mkState();
    const result = setSections(original, ['Numbers and Time'], newEntry);
    expect(result).not.toBe(original);
    expect(original.enabledSections).toEqual(['Basic Grammar', 'Numbers and Time']);
  });
});

describe('reducer — navigation flows', () => {
  it('advance three times then advance reveals new card; previous restores old at step 0', () => {
    const original = entry('Basic Grammar', 0, 0, true);
    let s = mkState({ current: original, step: 3 });
    s = advance(s);
    expect(s.current).toEqual(newEntry);
    expect(s.back).toEqual([original]);

    s = previous(s);
    expect(s.current).toEqual(original);
    expect(s.step).toBe(0);
    expect(s.forward).toEqual([newEntry]);
    expect(s.back).toEqual([]);
  });

  it('going back then forward (advance at step 3) restores the forward entry at step 0', () => {
    const first = entry('Basic Grammar', 0, 0, true);
    const second = entry('Numbers and Time', 1, 0, false);

    let s = mkState({ current: second, step: 3, back: [first], forward: [] });
    s = advance(s);
    expect(s.current).toEqual(newEntry);

    s = previous(s);
    expect(s.current).toEqual(second);
    expect(s.forward).toEqual([newEntry]);

    s = advance(mkState({ current: second, step: 3, back: [first], forward: [newEntry] }));
    expect(s.current).toEqual(newEntry);
    expect(s.step).toBe(0);
    expect(s.back).toEqual([first, second]);
    expect(s.forward).toEqual([]);
  });
});
