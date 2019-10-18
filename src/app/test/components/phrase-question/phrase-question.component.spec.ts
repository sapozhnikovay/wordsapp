import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseQuestionComponent } from './phrase-question.component';
import { MatChipsModule, MatButtonModule, MatFormFieldModule } from '@angular/material';

describe('PhraseQuestionComponent', () => {
  let component: PhraseQuestionComponent;
  let fixture: ComponentFixture<PhraseQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseQuestionComponent ],
      imports: [MatChipsModule, MatButtonModule, MatFormFieldModule]
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
