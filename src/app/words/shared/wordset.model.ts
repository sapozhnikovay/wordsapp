import { Word } from './word.model';

export interface WordSet {
  id: string;
  name: string;
  userid: number;
  words: Word[];
}
