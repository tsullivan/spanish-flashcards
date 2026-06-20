/**
 * 1. Import `source` from ../data/index.ts
 * 2. Walk through the `source` object and extract all text content from the cards.
 * 3. Stream each card text to a console logger.
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

  for (const [cardName, cardData] of Object.entries(source.cards)) {
    cellLogger([[cardName, 1]]);
    if (cardData && typeof cardData === 'object') {
      for (const [_key, value] of Object.entries(cardData)) {
        for (const item of value) {
          // log the item subTitle, if exists
          if (item.subTitle) {
            cellLogger([[item.subTitle, 2]]);
          }
          // log the answer and question of each card
          for (const card of item.cards) {
            cellLogger([
              [card.answer, 3],
              [card.question, 4],
            ]);

            // log each phrase in the card
            for (const phrase of card.phrases) {
              cellLogger([
                [phrase.answer, 3],
                [phrase.question, 4],
              ]);
            }
          }
        }
      }
    }
  }
  return cellLogs;
}

const logs = collectLogs();

console.log(logs.map((row) => row.join('\t')).join('\n'));
