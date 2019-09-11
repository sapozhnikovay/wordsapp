import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseQuestionComponent } from './phrase-question.component';

describe('PhraseQuestionComponent', () => {
  let component: PhraseQuestionComponent;
  let fixture: ComponentFixture<PhraseQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
