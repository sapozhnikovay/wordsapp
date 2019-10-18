import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '@env/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  imports: [AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule, AngularFireAuthModule],
  exports: [AngularFireModule, AngularFirestoreModule, AngularFireAuthModule]
})
export class FirebaseModule {}
