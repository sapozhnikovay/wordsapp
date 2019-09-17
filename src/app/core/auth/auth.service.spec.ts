import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable } from "rxjs";
import { User } from "firebase";

describe("AuthService", () => {
  let angularFireAuthStub: Partial<AngularFireAuth>;
  angularFireAuthStub = {
    authState: new Observable<User>()
  };
  let angularFirestoreStub: Partial<AngularFirestore>;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    })
  );

  it("should be created", () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
