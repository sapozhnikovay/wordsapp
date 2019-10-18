import { Component, OnInit, ViewChild } from '@angular/core';
import { Word } from '../../../test/shared/word.model';
import { ActivatedRoute } from '@angular/router';
import { WordsetsService } from '../../../test/shared/wordsets.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { TitleService } from 'src/app/core/title/title.service';

@Component({
  selector: 'app-public-list-details',
  templateUrl: './public-list-details.component.html',
  styleUrls: ['./public-list-details.component.scss']
})
export class PublicListDetailsComponent implements OnInit {
  public wordsetName: string;
  public words: Word[];
  private setId: string;
  displayedColumns = ['original', 'translation'];
  dataSource: MatTableDataSource<Word>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private activatedRoute: ActivatedRoute, private dataService: WordsetsService, private titleService: TitleService) {}

  ngOnInit() {
    this.setId = this.activatedRoute.snapshot.paramMap.get('name');
    this.dataService.getPublicWordset(this.setId).subscribe(set => this.titleService.setTitle(set.name));
    this.dataService.getPublicWords(this.setId).subscribe(res => {
      this.words = res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
    });
  }
}
