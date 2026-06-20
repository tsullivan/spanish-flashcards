import type { AppData } from '../types';
import { Introduction } from './introduction';
import { Part1 } from './part1';
import { Part2 } from './part2';
import { Part3 } from './part3';
import { Part4 } from './part4';
import { Part5 } from './part5';
import { Part6 } from './part6';
import { Part7 } from './part7';
import { Supplemental } from './supplemental';

export const source: AppData = {
  language: 'vi-VN',
  cards: {
    'Introduction': Introduction,
    'Part 1: Common Expressions and Keywords': Part1,
    'Part 2: Numbers, Dates, and Time': Part2,
    'Part 3: Getting Around': Part3,
    'Part 4: Emergencies and Essentials': Part4,
    'Part 5: Out and About': Part5,
    'Part 6: Exploring Vietnam': Part6,
    'Part 7: Key Names and Signs': Part7,
    'Supplemental': Supplemental,
  },
};
