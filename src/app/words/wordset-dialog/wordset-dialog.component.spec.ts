import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsetDialogComponent } from './wordset-dialog.component';

describe('WordsetDialogComponent', () => {
  let component: WordsetDialogComponent;
  let fixture: ComponentFixture<WordsetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
