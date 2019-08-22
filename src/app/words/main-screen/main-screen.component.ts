import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WordSet } from '../shared/wordset.model';
import { QuestionsService } from '../shared/questions.service';
import { WordsetsService } from '../shared/wordsets.service';
import { MatDialog } from '@angular/material';
import { WordsetDialogComponent } from '../wordset-dialog/wordset-dialog.component';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainScreenComponent implements OnInit {
  public wordSets: WordSet[];

  constructor(private questionsService: QuestionsService, private dataService: WordsetsService, private dialog: MatDialog) {}

  ngOnInit() {
    // this.wordSets = this.questionsService.getWordSets();
    this.dataService.getAll().subscribe(data => (this.wordSets = data));
  }

  addWordset() {
    const dialogRef = this.dialog.open(WordsetDialogComponent, {
      data: { name: '', create: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const ws = {
          name: result
        } as WordSet;
        this.dataService.addWordset(ws).subscribe(res => console.log(res));
      }
    });
  }

  editWordset(wordset: WordSet) {
    const dialogRef = this.dialog.open(WordsetDialogComponent, {
      data: { name: wordset.name, create: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        wordset.name = result;
        this.dataService.updateWordset(wordset).subscribe(res => console.log(res));
      }
    });
  }
}
