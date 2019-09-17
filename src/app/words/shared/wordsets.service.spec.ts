import { TestBed } from '@angular/core/testing';

import { WordsetsService } from './wordsets.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('WordsetsService', () => {
  let angularFirestoreStub: Partial<AngularFirestore>;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFirestore, useValue: angularFirestoreStub }
    ]
  }));

  it('should be created', () => {
    const service: WordsetsService = TestBed.get(WordsetsService);
    expect(service).toBeTruthy();
  });
});
