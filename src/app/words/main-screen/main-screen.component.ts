import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WordSet } from '../shared/wordset.model';
import { WordsetsService } from '../shared/wordsets.service';
import { MatDialog } from '@angular/material';
import { WordsetDialogComponent } from '../wordset-dialog/wordset-dialog.component';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TitleService } from 'src/app/core/title/title.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainScreenComponent implements OnInit {
  public wordSets: WordSet[] = [];
  public hideActions = true;
  private userId: string;
  public loading = true;

  constructor(
    private dataService: WordsetsService,
    private dialog: MatDialog,
    private authService: AuthService,
    titleService: TitleService
  ) {
    titleService.setTitle('WordsApp');
  }

  ngOnInit() {
    // this.wordSets = this.questionsService.getWordSets();
    this.authService.user$.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.dataService.getAll(this.userId).subscribe(
          data => {
            this.wordSets = data;
            this.loading = false;
          },
          error => {
            console.log(error);
            this.loading = false;
          }
        );
      }
    });
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
        this.dataService.addWordset(this.userId, ws).subscribe(res => console.log(res));
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
        this.dataService.updateWordset(this.userId, wordset).subscribe(res => console.log(res));
      }
    });
  }

  deleteWordSet(wordset: WordSet) {
    if (confirm(`Delete wordset ${wordset.name} ?`)) {
      this.dataService.deleteWordset(this.userId, wordset.id).subscribe(res => console.log(res));
    }
  }
}
