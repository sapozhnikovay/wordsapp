import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private title: Subject<string> = new Subject<string>();
  public title$: Observable<string> = this.title.asObservable();

  constructor() {}

  setTitle(value: string) {
    this.title.next(value);
  }
}
