import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { WordsetsService } from './wordsets.service';

describe('WordsetsService', () => {
  const angularFirestoreStub: Partial<AngularFirestore> = {};
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFirestore, useValue: angularFirestoreStub }]
    })
  );

  it('should be created', () => {
    const service: WordsetsService = TestBed.get(WordsetsService);
    expect(service).toBeTruthy();
  });
});
