import { Injectable } from '@angular/core';
import { Question } from './question.model';
import * as mock from './words.mock';
import * as wordsetMock from './wordset.mock';
import { WordSet } from './wordset.model';
import { WordsetsService } from './wordsets.service';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Word } from './word.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private wordsService: WordsetsService) {}

  getWordSets(): WordSet[] {
    return wordsetMock.default;
  }

  getQuestions(wordSet: string): Observable<Question[]> {
    return this.wordsService.getWords(wordSet).pipe(
      map(db => {
        const result: Question[] = [].concat(this._getDirectQuestions(db).slice(0, 10)).concat(this._getReverseQuestions(db).slice(0, 10));
        this._shuffle(result);
        return result;
      })
    );
  }

  private _getDirectQuestions(words: Word[]): Question[] {
    let result: Question[] = [];
    result = words.map(word => {
      const options = [];
      const allOptions = words.filter(w => w !== word).map(w => w.translation);
      options.push(word.translation);
      for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * allOptions.length);
        options.push(allOptions.splice(index, 1)[0]);
      }
      this._shuffle(options);
      return {
        word: word.original,
        answer: word.translation,
        options
      } as Question;
    });
    return result;
  }

  private _getReverseQuestions(words: Word[]): Question[] {
    let result: Question[] = [];
    result = words.map(word => {
      const options = [];
      const allOptions = words.filter(w => w !== word).map(w => w.original);
      options.push(word.original);
      for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * allOptions.length);
        options.push(allOptions.splice(index, 1)[0]);
      }
      this._shuffle(options);
      return {
        word: word.translation,
        answer: word.original,
        options
      } as Question;
    });
    return result;
  }

  private _shuffle(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
