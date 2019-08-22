import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWordsetComponent } from './edit-wordset.component';

describe('EditWordsetComponent', () => {
  let component: EditWordsetComponent;
  let fixture: ComponentFixture<EditWordsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWordsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWordsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
