import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-wordset-dialog',
  templateUrl: './wordset-dialog.component.html',
  styleUrls: ['./wordset-dialog.component.scss']
})
export class WordsetDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<WordsetDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
