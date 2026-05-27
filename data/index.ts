import type { AppData } from './types';
import { Chapter1 } from './chapter1';
import { Chapter2 } from './chapter2';
import { Chapter3 } from './chapter3';

export const source: AppData = {
  language: 'es-ES',
  cards: {
    'Chapter 1 - Spanish in a Nutshell': Chapter1,
    'Chapter 2 - Warming Up with Spanish Grammar Basics': Chapter2,
    'Chapter 3 - Getting Started with Basic Expressions': Chapter3,
  },
};

