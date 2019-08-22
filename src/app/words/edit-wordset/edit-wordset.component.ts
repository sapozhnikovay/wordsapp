import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordsetsService } from '../shared/wordsets.service';
import { Word } from '../shared/word.model';
import { MatDialog } from '@angular/material';
import { WordDialogComponent } from '../word-dialog/word-dialog.component';

@Component({
  selector: 'app-edit-wordset',
  templateUrl: './edit-wordset.component.html',
  styleUrls: ['./edit-wordset.component.scss']
})
export class EditWordsetComponent implements OnInit {
  public wordsetName: string;
  public words: Word[];
  private setId: string;

  constructor(private activatedRoute: ActivatedRoute, private dataService: WordsetsService, private dialog: MatDialog) {}

  ngOnInit() {
    this.setId = this.activatedRoute.snapshot.paramMap.get('name');
    this.dataService.getWords(this.setId).subscribe(res => (this.words = res));
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
        this.dataService.addWord(this.setId, newWord).subscribe(res => console.log(res));
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
        this.dataService.updateWord(this.setId, word).subscribe(res => console.log(res));
      }
    });
  }

  deleteWord(word: Word) {
    if (confirm(`Delete word ${word.original} ?`)) {
      this.dataService.deleteWord(this.setId, word.id).subscribe(res => console.log(res));
    }
  }
}
