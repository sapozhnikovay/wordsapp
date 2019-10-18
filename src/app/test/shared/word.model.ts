export enum POS {
  Noun = 1,
  Verb = 2,
  Adjective = 3
}

export interface Word {
  id: string;
  original: string;
  translation: string;
  pos?: POS;
}
