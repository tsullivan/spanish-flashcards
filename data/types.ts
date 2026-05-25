export interface CardPair {
  question: string;
  answer: string;
}

export type Card = CardPair & {
  phrases: CardPair[];
};

interface CollectionSet {
  [chapter: string]: CardCollection;
}

export interface AppData {
  language: 'es-ES';
  cards: CollectionSet;
}

export interface CardCollection {
  [section: string]: {
    subTitle?: string;
    cards: Card[];
  }[];
}

