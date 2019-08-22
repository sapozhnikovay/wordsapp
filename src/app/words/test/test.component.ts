import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import { Question } from '../shared/question.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {
  public currentQuestion: Question;
  private questions: Question[] = [];
  private index = 0;
  public results = 0;
  public total = 0;
  public showResults = false;
  public showQuestions = false;
  private wordSet: string;

  constructor(private questionsService: QuestionsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.wordSet = this.activatedRoute.snapshot.paramMap.get('name');
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.questionsService.getQuestions(this.wordSet).subscribe(result => {
      this.results = 0;
      this.index = 0;
      this.questions = result;
      this.total = this.questions.length;
      this.currentQuestion = this.getNextQuestion();
      this.showResults = false;
      this.showQuestions = true;
    });
  }

  getNextQuestion(): Question | null {
    if (this.index < this.questions.length) {
      return this.questions[this.index];
    } else {
      return null;
    }
  }

  checkAnswer(result: boolean) {
    if (result) {
      this.results++;
    }
    this.index++;
    const nextQuestion = this.getNextQuestion();
    if (nextQuestion) {
      setTimeout(() => {
        this.currentQuestion = nextQuestion;
      }, 1000);
    } else {
      setTimeout(() => {
        this.showQuestions = false;
        this.showResults = true;
      }, 1000);
    }
  }
}
