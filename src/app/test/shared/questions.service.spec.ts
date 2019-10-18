import { TestBed } from '@angular/core/testing';

import { QuestionsService } from './questions.service';
import { WordsetsService } from './wordsets.service';

describe('QuestionsService', () => {
  const wordsetServiceStub: Partial<WordsetsService> = {};
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: WordsetsService, useValue: wordsetServiceStub }]
    })
  );

  it('should be created', () => {
    const service: QuestionsService = TestBed.get(QuestionsService);
    expect(service).toBeTruthy();
  });
});
