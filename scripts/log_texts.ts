/**
 * 1. Import `source` from ../data/index.ts
 * 2. Create a function `collectLogs` that iterates through the `source.cards` object and collects logs in a structured format.
 * 3. For each card, log the card name, subTitle (if exists), answer, question, and phrases in a tabular format.
 * 4. Return the collected logs as an array of arrays of strings.
 * 5. Finally, print the collected logs in a readable format (e.g., using console.log).
 *
 * The expected output should be a tab-separated string where each row represents a card and its details, including subTitle, answer, question, and phrases.
 */

import { source } from '../data';

function collectLogs() {
  const cellLogs: Array<string[]> = [];

  function cellLogger(messages: [string, number][]) {
    // create an array with length of position, fill it with empty strings, and set the last element to message
    const position = Math.max(...messages.map(([_, pos]) => pos));
    const row = new Array(position).fill('');
    for (const [message, pos] of messages) {
      row[pos - 1] = message;
    }
    cellLogs.push(row);
  }

  for (const [partName, partData] of Object.entries(source.cards)) {
    cellLogger([['# ' + partName, 1]]);
    if (partData && typeof partData === 'object') {
      for (const [sectionName, sectionData] of Object.entries(partData)) {
        cellLogger([['## ' + sectionName, 1]]);
        for (const item of sectionData) {
          // log the item subTitle, if exists
          if (item.subTitle) {
            cellLogger([['### ' + item.subTitle, 1]]);
          }
          // log the answer and question of each card
          for (const card of item.cards) {
            cellLogger([
              [card.answer, 2],
              [card.question, 3],
            ]);

            // log each phrase in the card
            for (const phrase of card.phrases) {
              cellLogger([
                [phrase.answer, 4],
                [phrase.question, 5],
              ]);
            }
          }
        }
      }
    }
  }

  return cellLogs;
}

console.log(
  collectLogs()
    .map((row) => row.join('\t'))
    .join('\n'),
);
