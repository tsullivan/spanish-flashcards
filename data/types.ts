export interface CardPair {
  question: string;
  answer: string;
  // TODO: optional pronunciation, maybe an audio file or something
}

export type Card = CardPair & ({ phrases: CardPair[] });

interface CollectionSet {
  [chapter: string]: CardCollection;
}

export interface AppData {
  language: 'es-ES' | 'vi-VN';
  cards: CollectionSet;
}

export interface CardCollection {
  [section: string]: {
    subTitle?: string;
    cards: Card[];
  }[];
}
