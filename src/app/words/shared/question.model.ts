export enum QuestionType {
  Options = 1,
  Input = 2
}

export interface Question {
  word: string;
  type: QuestionType;
  answer: string;
  options?: string[];
}
