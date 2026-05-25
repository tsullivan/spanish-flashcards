import { describe, it, expect } from 'vitest';
import { reducer } from '../stores/flashcards';

type State = Parameters<typeof reducer>[0];
type Action = Parameters<typeof reducer>[1];
type Entry = State['current'];

const entry = (q = 0, p = 0, s = true): Entry => ({ questionIndex: q, phrasesIndex: p, showQuestionFirst: s });
const newEntry = entry(5, 1, false);

const mkState = (overrides: Partial<State> = {}): State => ({
  current: entry(),
  step: 0,
  back: [],
  forward: [],
  ...overrides,
});

const advance = (state: State): State => reducer(state, { type: 'ADVANCE', newEntry });
const previous = (state: State): State => reducer(state, { type: 'PREVIOUS' });
const restart = (state: State): State => reducer(state, { type: 'RESTART', newEntry });

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
    const original = entry(1, 2, true);
    const s = advance(mkState({ current: original, step: 3 }));
    expect(s.step).toBe(0);
    expect(s.current).toEqual(newEntry);
    expect(s.back).toEqual([original]);
    expect(s.forward).toEqual([]);
  });

  it('at step 3 with existing back: appends current to back before loading new card', () => {
    const existing = entry(9, 0, false);
    const original = entry(1, 2, true);
    const s = advance(mkState({ current: original, step: 3, back: [existing] }));
    expect(s.back).toEqual([existing, original]);
    expect(s.current).toEqual(newEntry);
  });

  it('at step 3 with non-empty forward: pops forward, pushes current to back, sets step to 1', () => {
    const forward1 = entry(7, 0, true);
    const forward2 = entry(8, 0, false);
    const original = entry(1, 2, true);
    const s = advance(mkState({ current: original, step: 3, forward: [forward1, forward2] }));
    expect(s.step).toBe(1);
    expect(s.current).toEqual(forward2);
    expect(s.back).toEqual([original]);
    expect(s.forward).toEqual([forward1]);
  });

  it('at step 3 with forward: ignores newEntry entirely', () => {
    const forwardEntry = entry(7, 0, true);
    const s = advance(mkState({ step: 3, forward: [forwardEntry] }));
    expect(s.current).toEqual(forwardEntry);
    expect(s.current).not.toEqual(newEntry);
  });

  it('does not mutate the original state object', () => {
    const original = mkState({ step: 0 });
    const frozen = Object.freeze({ ...original, back: Object.freeze([...original.back]) });
    const result = reducer(frozen as State, { type: 'ADVANCE', newEntry });
    expect(result).not.toBe(frozen);
    expect(result.step).toBe(1);
  });
});

describe('reducer — PREVIOUS', () => {
  it('returns the same state when back is empty', () => {
    const s = mkState({ step: 2 });
    expect(previous(s)).toBe(s);
  });

  it('pops last entry from back, pushes current to forward, resets step to 0', () => {
    const backEntry = entry(3, 1, false);
    const original = entry(0, 0, true);
    const s = previous(mkState({ current: original, step: 2, back: [backEntry] }));
    expect(s.step).toBe(0);
    expect(s.current).toEqual(backEntry);
    expect(s.back).toEqual([]);
    expect(s.forward).toEqual([original]);
  });

  it('only pops the last back entry when multiple exist', () => {
    const back1 = entry(1, 0, true);
    const back2 = entry(2, 0, false);
    const s = previous(mkState({ back: [back1, back2] }));
    expect(s.current).toEqual(back2);
    expect(s.back).toEqual([back1]);
  });

  it('appends current to existing forward stack', () => {
    const existing = entry(9, 0, true);
    const original = entry(0, 0, false);
    const s = previous(mkState({ current: original, back: [entry(1, 0, true)], forward: [existing] }));
    expect(s.forward).toEqual([existing, original]);
  });

  it('does not mutate the original state', () => {
    const backEntry = entry(3, 1, false);
    const original = mkState({ back: [backEntry] });
    const result = previous(original);
    expect(result).not.toBe(original);
    expect(original.back).toEqual([backEntry]);
  });
});

describe('reducer — RESTART', () => {
  it('uses newEntry as current, resets step to 0, clears both stacks', () => {
    const s = restart(mkState({
      current: entry(1, 2, true),
      step: 3,
      back: [entry(4, 0, false)],
      forward: [entry(5, 1, true)],
    }));
    expect(s.current).toEqual(newEntry);
    expect(s.step).toBe(0);
    expect(s.back).toEqual([]);
    expect(s.forward).toEqual([]);
  });
});

describe('reducer — navigation flows', () => {
  it('advance three times then advance reveals new card; previous restores old at step 0', () => {
    const original = entry(0, 0, true);
    let s = mkState({ current: original, step: 3 });
    s = advance(s); // step 3 → new card at step 0
    expect(s.current).toEqual(newEntry);
    expect(s.back).toEqual([original]);

    s = previous(s); // back → original at step 0
    expect(s.current).toEqual(original);
    expect(s.step).toBe(0);
    expect(s.forward).toEqual([newEntry]);
    expect(s.back).toEqual([]);
  });

  it('going back then forward (via advance at step 3) restores the forward entry at step 1', () => {
    const first = entry(0, 0, true);
    const second = entry(1, 0, false);

    // Simulate: advance past first to second, go back to first, then advance past first again
    let s = mkState({ current: second, step: 3, back: [first] });
    s = advance(s); // pop first onto back? No wait — at step 3, advance pushes current (second) to back and loads newEntry
    // Actually that's wrong. Let me redo this.
    // State: current=second, step=3, back=[first], forward=[]
    // advance → current=newEntry, step=0, back=[first, second], forward=[]
    // previous → current=second, step=0, back=[first], forward=[newEntry]
    // advance (step0→1→2→3 then advance again) restores forward

    s = mkState({ current: second, step: 3, back: [first], forward: [] });
    s = advance(s); // current=newEntry, step=0, back=[first,second]
    expect(s.current).toEqual(newEntry);

    s = previous(s); // current=second, step=0, back=[first], forward=[newEntry]
    expect(s.current).toEqual(second);
    expect(s.forward).toEqual([newEntry]);

    // Advance through steps 0→1→2→3, then one more
    s = advance(mkState({ current: second, step: 3, back: [first], forward: [newEntry] }));
    expect(s.current).toEqual(newEntry);
    expect(s.step).toBe(1);
    expect(s.back).toEqual([first, second]);
    expect(s.forward).toEqual([]);
  });
});
