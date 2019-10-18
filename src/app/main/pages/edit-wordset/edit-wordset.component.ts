import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordsetsService } from '../../../test/shared/wordsets.service';
import { Word } from '../../../test/shared/word.model';
import { MatDialog } from '@angular/material';
import { WordDialogComponent } from '../../components/word-dialog/word-dialog.component';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TitleService } from 'src/app/core/title/title.service';

@Component({
  selector: 'app-edit-wordset',
  templateUrl: './edit-wordset.component.html',
  styleUrls: ['./edit-wordset.component.scss']
})
export class EditWordsetComponent implements OnInit {
  public wordsetName: string;
  public words: Word[];
  private setId: string;
  private userId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: WordsetsService,
    private dialog: MatDialog,
    private authService: AuthService,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    this.setId = this.activatedRoute.snapshot.paramMap.get('name');
    this.authService.user$.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.dataService.getWords(this.userId, this.setId).subscribe(res => (this.words = res));
        this.dataService.getWordset(this.userId, this.setId).subscribe(set => this.titleService.setTitle(set.name));
      }
    });
  }

  addWord() {
    const dialogRef = this.dialog.open(WordDialogComponent, {
      data: { original: '', translation: '', create: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.original && result.translation) {
        const newWord = {
          original: result.original,
          translation: result.translation
        } as Word;
        this.dataService.addWord(this.userId, this.setId, newWord).subscribe(res => console.log(res));
      }
    });
  }

  editWord(word: Word) {
    const dialogRef = this.dialog.open(WordDialogComponent, {
      data: { original: word.original, translation: word.translation, create: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.original && result.translation) {
        word.original = result.original;
        word.translation = result.translation;
        this.dataService.updateWord(this.userId, this.setId, word).subscribe(res => console.log(res));
      }
    });
  }

  deleteWord(word: Word) {
    if (confirm(`Delete word ${word.original} ?`)) {
      this.dataService.deleteWord(this.userId, this.setId, word.id).subscribe(res => console.log(res));
    }
  }
}
