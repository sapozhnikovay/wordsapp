import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicListComponent } from './public-list.component';
import { MaterialModule } from '@app/ui/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { User } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TitleService } from 'src/app/core/title/title.service';
import { WordsetsService } from '@app/test/shared/wordsets.service';

describe('PublicListComponent', () => {
  let component: PublicListComponent;
  let fixture: ComponentFixture<PublicListComponent>;
  let dataService: WordsetsService;

  const data = from([]);

  const collectionStub = {
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data),
    snapshotChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
  };

  let angularFireAuthStub: Partial<AngularFireAuth>;
  angularFireAuthStub = {
    authState: new Observable<User>()
  };
  let angularFirestoreStub: Partial<AngularFirestore>;
  angularFirestoreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [PublicListComponent],
      providers: [{ provide: AngularFireAuth, useValue: angularFireAuthStub }, { provide: AngularFirestore, useValue: angularFirestoreStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicListComponent);
    component = fixture.componentInstance;
    dataService = fixture.debugElement.injector.get(WordsetsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
