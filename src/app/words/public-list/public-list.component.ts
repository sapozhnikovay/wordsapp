import { Component, OnInit } from '@angular/core';
import { WordsetsService } from '../shared/wordsets.service';
import { WordSet } from '../shared/wordset.model';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TitleService } from 'src/app/core/title/title.service';

@Component({
  selector: 'app-public-list',
  templateUrl: './public-list.component.html',
  styleUrls: ['./public-list.component.scss']
})
export class PublicListComponent implements OnInit {
  public wordSets: WordSet[] = [];
  public userWordsets: WordSet[] = [];
  private userId: string;

  constructor(private dataService: WordsetsService, private authService: AuthService, private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setTitle('Public sets');
    this.authService.user$.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.dataService.getAll(this.userId).subscribe(data => (this.userWordsets = data));
      }
    });
    this.dataService.getAllPublic().subscribe(data => (this.wordSets = data));
  }

  hasWordset(wordset: WordSet): boolean {
    return this.userWordsets.find(ws => ws.name === wordset.name) ? true : false;
  }

  copyWordset(wordset: WordSet) {
    this.dataService.copyPublicWordset(wordset.id, this.userId).subscribe();
  }
}
