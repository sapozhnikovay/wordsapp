import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { LayoutModule } from './layout/layout.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AccountModule } from './account/account.module';
import { ProfileModule } from './profile/profile.module';
import { TestModule } from './test/test.module';
import { MainModule } from './main/main.module';
import { FirebaseModule } from './core/firebase';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FirebaseModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    AccountModule,
    ProfileModule,
    TestModule,
    MainModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
