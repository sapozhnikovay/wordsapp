import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWordsetComponent } from './edit-wordset.component';
import { MaterialModule } from '@app/ui/material/material.module';
import { FormsModule } from '@angular/forms';

describe('EditWordsetComponent', () => {
  let component: EditWordsetComponent;
  let fixture: ComponentFixture<EditWordsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule],
      declarations: [EditWordsetComponent]
    }).compileComponents();
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
