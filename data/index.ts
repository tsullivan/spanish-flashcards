import type { AppData } from './types';
import { Chapter1 } from './source1';
import { Chapter2 } from './source2';
import { Chapter3 } from './source3';

export const source: AppData = {
  language: 'es-ES',
  cards: {
    'Chapter 1 - Spanish in a Nutshell': Chapter1,
    'Chapter 2 - Warming Up with Spanish Grammar Basics': Chapter2,
    'Chapter 3 - Getting Started with Basic Expressions': Chapter3,
  },
};

