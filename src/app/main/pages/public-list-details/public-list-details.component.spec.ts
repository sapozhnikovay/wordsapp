import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicListDetailsComponent } from './public-list-details.component';
import { MaterialModule } from '@app/ui/material/material.module';

describe('PublicListDetailsComponent', () => {
  let component: PublicListDetailsComponent;
  let fixture: ComponentFixture<PublicListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [PublicListDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
