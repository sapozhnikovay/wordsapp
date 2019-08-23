import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';
import { Question } from '../shared/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() question: Question;
  @Output() answer = new EventEmitter<boolean>();
  public gotAnswer = false;
  public result: boolean;
  public inputAnswer = '';
  private selected = '';
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.inputAnswer = '';
    this.gotAnswer = false;
  }

  sendAnswer(option: string) {
    if (!this.gotAnswer) {
      this.selected = option;
      this.gotAnswer = true;
      let result = false;
      if (option === this.question.answer) {
        result = true;
      }
      this.answer.emit(result);
    }
  }

  checkInputAnswer(answer: string) {
    if (!this.gotAnswer) {
      this.result = this.question.answer.toLowerCase().includes(answer.toLowerCase());
      this.gotAnswer = true;
      this.answer.emit(this.result);
    }
  }

  isRightAnswer(option: string) {
    if (
      this.gotAnswer &&
      ((option === this.selected && option === this.question.answer) || (option !== this.selected && option === this.question.answer))
    ) {
      return 'primary';
    }
    if (this.gotAnswer && option === this.selected && option !== this.question.answer) {
      return 'warn';
    }
  }

  isDisabled(option: string) {
    return option !== this.selected && option !== this.question.answer && this.gotAnswer;
  }

  getInputFieldColor() {
    if (this.gotAnswer && this.result) {
      return 'primary';
    }
    if (this.gotAnswer && !this.result) {
      return 'warn';
    }
  }
}
