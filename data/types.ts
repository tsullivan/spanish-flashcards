export interface CardPair {
  question: string;
  answer: string;
}

export type Card = CardPair & {
  phrases: CardPair[];
};

export interface AppData {
  language: 'es-ES';
  cards: Array<Card & { type: string }>;
}


