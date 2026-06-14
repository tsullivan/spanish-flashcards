export interface CardPair {
  question: string;
  answer: string;
  // TODO: optional pronunciation, maybe an audio file or something
}

export type Card = CardPair & { phrases: [CardPair, ...CardPair[]] };

interface CollectionSet {
  [chapter: string]: CardCollection;
}

export interface AppData {
  language: 'es-ES' | 'vi-VN';
  cards: CollectionSet;
}

export interface CardCollection {
  [section: string]: {
    // When true, every card in this group is shown question-first instead of a
    // random side (e.g. pronunciation drills).
    showQuestionFirstAlways?: boolean;
    subTitle?: string;
    cards: Card[];
  }[];
}
