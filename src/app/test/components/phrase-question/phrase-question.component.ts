import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Phrase } from '../../shared/phrase.model';

@Component({
  selector: 'app-phrase-question',
  templateUrl: './phrase-question.component.html',
  styleUrls: ['./phrase-question.component.scss']
})
export class PhraseQuestionComponent implements OnInit {
  @Input() phrase: Phrase;
  @Output() answer = new EventEmitter<boolean>();
  public gotAnswer = false;
  public result: boolean;
  public inputAnswer = '';
  public answerArray: string[] = [];

  constructor() {}

  ngOnInit() {
    this.phrase = {
      text: 'До свидания!',
      answer: 'Auf Wiedersehen',
      options: ['Auf', 'auf', 'Wiedersehen', 'dort']
    };
  }

  checkInputAnswer() {
    if (!this.gotAnswer) {
      this.result = this.phrase.answer === this.answerArray.join(' ');
      this.gotAnswer = true;
      this.answer.emit(this.result);
    }
  }

  moveChip(chip: string) {
    this.phrase.options.splice(this.phrase.options.findIndex(el => el === chip), 1);
    this.answerArray.push(chip);
  }

  returnChip(chip: string) {
    this.answerArray.splice(this.answerArray.findIndex(el => el === chip), 1);
    this.phrase.options.push(chip);
  }
}
