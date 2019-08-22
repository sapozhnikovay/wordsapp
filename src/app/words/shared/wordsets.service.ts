import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { WordSet } from './wordset.model';
import { Observable, of, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Word } from './word.model';

@Injectable({
  providedIn: 'root'
})
export class WordsetsService {
  constructor(private db: AngularFirestore) {}

  public getAll(): Observable<WordSet[]> {
    return this.db
      .collection<WordSet>('/wordsets')
      .snapshotChanges()
      .pipe(
        map(payload => {
          return payload.map(el => {
            const id = el.payload.doc.id;
            const data = el.payload.doc.data();
            return { id, ...data } as WordSet;
          });
        })
      );
  }

  public getWords(setId: string): Observable<Word[]> {
    return this.db
      .collection<Word>(`/wordsets/${setId}/words`)
      .snapshotChanges()
      .pipe(
        map(payload => {
          return payload.map(el => {
            const id = el.payload.doc.id;
            const data = el.payload.doc.data();
            return { id, ...data } as Word;
          });
        })
      );
  }

  public addWordset(wordset: WordSet): Observable<boolean> {
    return from(this.db.collection('/wordsets').add(wordset)).pipe(switchMap(res => of(true)));
  }

  public updateWordset(wordset: WordSet): Observable<boolean> {
    return from(this.db.doc(`/wordsets/${wordset.id}`).update(wordset)).pipe(switchMap(res => of(true)));
  }

  public deleteWordset(id: string): Observable<boolean> {
    return from(this.db.doc(`/wordsets/${id}`).delete()).pipe(switchMap(res => of(true)));
  }

  public addWord(setId: string, word: Word): Observable<boolean> {
    return from(this.db.collection(`/wordsets/${setId}/words`).add(word)).pipe(switchMap(res => of(true)));
  }

  public updateWord(setId: string, word: Word): Observable<boolean> {
    return from(this.db.doc(`/wordsets/${setId}/words/${word.id}`).update(word)).pipe(switchMap(res => of(true)));
  }

  public deleteWord(setId: string, wordId: string): Observable<boolean> {
    return from(this.db.doc(`/wordsets/${setId}/words/${wordId}`).delete()).pipe(switchMap(res => of(true)));
  }
}
