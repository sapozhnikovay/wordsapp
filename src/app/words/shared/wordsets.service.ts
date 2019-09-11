import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { WordSet } from './wordset.model';
import { Observable, of, from, forkJoin } from 'rxjs';
import { map, switchMap, tap, first } from 'rxjs/operators';
import { Word } from './word.model';

@Injectable({
  providedIn: 'root'
})
export class WordsetsService {
  constructor(private db: AngularFirestore) {}

  public copyPublicWordset(setId: string, userId: string): Observable<boolean> {
    const newWordsetId$: Observable<string> = this.db
      .doc<WordSet>(`/wordsets/${setId}`)
      .valueChanges()
      .pipe(
        first(),
        switchMap(payload => {
          return from(this.db.collection(`/users/${userId}/wordsets`).add(payload)).pipe(
            switchMap(result => {
              return of(result.id);
            })
          );
        })
      );

    return newWordsetId$.pipe(
      switchMap(newsetId => {
        console.log('newsetid: ', newsetId);
        return this.db
          .collection<Word>(`/wordsets/${setId}/words`)
          .snapshotChanges()
          .pipe(
            first(),
            map(payload => {
              return payload.map(el => {
                return el.payload.doc.data() as Word;
              });
            })
          )
          .pipe(
            switchMap(words => {
              console.log(words);
              const observables = words.map(word => from(this.db.collection(`/users/${userId}/wordsets/${newsetId}/words`).add(word)));
              return forkJoin(observables);
            })
          )
          .pipe(switchMap(res => of(true)));
      })
    );
  }

  public getAllPublic(): Observable<WordSet[]> {
    return this.db
      .collection<WordSet>(`/wordsets`)
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

  public getPublicWords(setId: string): Observable<Word[]> {
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

  public getAll(userId: string): Observable<WordSet[]> {
    return this.db
      .collection<WordSet>(`/users/${userId}/wordsets`)
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

  public getWords(userId: string, setId: string): Observable<Word[]> {
    return this.db
      .collection<Word>(`/users/${userId}/wordsets/${setId}/words`)
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

  public getWordset(userId: string, setId: string): Observable<WordSet> {
    return this.db.doc<WordSet>(`/users/${userId}/wordsets/${setId}`).valueChanges();
  }

  public getPublicWordset(setId: string): Observable<WordSet> {
    return this.db.doc<WordSet>(`/wordsets/${setId}`).valueChanges();
  }

  public addWordset(userId: string, wordset: WordSet): Observable<boolean> {
    return from(this.db.collection(`/users/${userId}/wordsets`).add(wordset)).pipe(switchMap(res => of(true)));
  }

  public updateWordset(userId: string, wordset: WordSet): Observable<boolean> {
    return from(this.db.doc(`/users/${userId}/wordsets/${wordset.id}`).update(wordset)).pipe(switchMap(res => of(true)));
  }

  public deleteWordset(userId: string, setId: string): Observable<boolean> {
    return from(this.db.doc(`/users/${userId}/wordsets/${setId}`).delete()).pipe(switchMap(res => of(true)));
  }

  public addWord(userId: string, setId: string, word: Word): Observable<boolean> {
    return from(this.db.collection(`/users/${userId}/wordsets/${setId}/words`).add(word)).pipe(switchMap(res => of(true)));
  }

  public updateWord(userId: string, setId: string, word: Word): Observable<boolean> {
    return from(this.db.doc(`/users/${userId}/wordsets/${setId}/words/${word.id}`).update(word)).pipe(switchMap(res => of(true)));
  }

  public deleteWord(userId: string, setId: string, wordId: string): Observable<boolean> {
    return from(this.db.doc(`/users/${userId}/wordsets/${setId}/words/${wordId}`).delete()).pipe(switchMap(res => of(true)));
  }
}
