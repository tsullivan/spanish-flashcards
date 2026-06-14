import type { CardCollection } from '../types';

/**
 * Introduction: Pronunciation Guide,
 */
export const Introduction: CardCollection = {
  'The Tone System': [{ cards: [
    // ghost - ma
    { answer: 'ghost', question: 'ma', phrases: [
      { answer: 'level tone - no symbol - relatively high pitch', question: 'ma' },
    ] },
    // mother - má
    { answer: 'mother', question: 'má', phrases: [
      { answer: 'rising tone - acute accent - very high pitch', question: 'má' },
    ] },
    // but; who/that/which - mà
    { answer: 'but; who/that/which', question: 'mà', phrases: [
      { answer: 'falling tone - grave accent - rather low pitch', question: 'mà' },
    ] },
    // tomb - mả
    { answer: 'grave, tomb', question: 'mả', phrases: [
      { answer: 'low-rising tone - question mark minus the dot - starts at a low pitch and then rises', question: 'mả' },
    ] },
    // horse - mã
    { answer: 'horse', question: 'mã', phrases: [
      { answer: 'broken, low-rising - tilde - starts low and rises abruptly, causing an initial stop in the voice box inside the throat', question: 'mã' },
    ] },
    // rice seedling - mạ
    { answer: 'rice seedling', question: 'mạ', phrases: [
      { answer: 'lowest tone - dot below - lowest possible pitch', question: 'mạ' },
    ] },
  ] }],

  'The Vowel System': [{ cards: [
    // a - as in calm
    { answer: 'a', question: 'as in calm' },
    // ă - as in hot
    { answer: 'ă', question: 'as in hot' },
    // â - as in run
    { answer: 'â', question: 'as in run' },
    // e - as in bed
    { answer: 'e', question: 'as in bed' },
    // ê - as in day
    { answer: 'ê', question: 'as in day' },
    // i - as in need
    { answer: 'i', question: 'as in need' },
    // o as in lawn
    { answer: 'o', question: 'as in lawn' },
    // ô - as in oh
    { answer: 'ô', question: 'as in oh' },
    // ơ - as in sofa
    { answer: 'ơ', question: 'as in sofa' },
    // u - as in food
    { answer: 'u', question: 'as in food' },
    // ư - as in huh
    { answer: 'ư', question: 'as in huh' },
    // y - as in need
    { answer: 'y', question: 'as in need' },
  ] }],
  'Vowel Combinations': [{ cards: [
    // ai - as in Thailand
    // ao - as in town
    // au - a combination of "ah" as in "hot" andn "oo" as in "food"
    // ay - a combination of "ah" as in "hot" and "ee" as in "need"
    // âu - a combination of "o" as in "oh" and "oo" as in "food"
    // ây - as in "may"
    // eo - a combination of "e" as in "bed" and "oo" as in "food"
    // êu - a combination of "ay" as in "day" and "oo" as in "food"
    // ia - as in "dear"
    // iê - as in "yes"
    // iu - as in "hew"
    // oa - "wa" as in "memoir"
    // oi - as in "toy"
    // ôi - a combination of "o" as in "oh" and "ee" as in "need"
    // ơi - a combination of "a" as in "sofa" and "ee" as in "need"
    // ua/uâ - "wa" as in "qualm" when preceded by "q"; elsewhere a combination of "oo" as in "food" and "a" as in "sofa"
  ] }],
  // 'The Consonant System`': [{ cards: [
  // ] }],
};
