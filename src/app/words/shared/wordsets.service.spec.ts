import { TestBed } from '@angular/core/testing';

import { WordsetsService } from './wordsets.service';

describe('WordsetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordsetsService = TestBed.get(WordsetsService);
    expect(service).toBeTruthy();
  });
});
