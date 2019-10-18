import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenToolbarComponent } from './main-screen-toolbar.component';

describe('MainScreenToolbarComponent', () => {
  let component: MainScreenToolbarComponent;
  let fixture: ComponentFixture<MainScreenToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainScreenToolbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScreenToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
