import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { TestComponent } from './test/test.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { EditWordsetComponent } from './edit-wordset/edit-wordset.component';
import { MainScreenToolbarComponent } from './main-screen-toolbar/main-screen-toolbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { LoginLayoutComponent } from '../layout/login-layout/login-layout.component';
import { PublicListComponent } from './public-list/public-list.component';
import { PublicListDetailsComponent } from './public-list-details/public-list-details.component';
import { PhraseQuestionComponent } from './phrase-question/phrase-question.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToMain = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: MainScreenComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin, toolbar: MainScreenToolbarComponent }
      },
      {
        path: 'test/:name',
        component: TestComponent,
        data: { showBackButton: true }
      },
      {
        path: 'edit/:name',
        component: EditWordsetComponent,
        data: { showBackButton: true }
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        data: { showBackButton: true }
      },
      {
        path: 'public',
        component: PublicListComponent,
        data: { showBackButton: true }
      },
      {
        path: 'public/:name',
        component: PublicListDetailsComponent,
        data: { showBackButton: true }
      },
      {
        path: 'phrase',
        component: PhraseQuestionComponent,
        data: { showBackButton: true }
      }
    ]
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToMain },
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsRoutingModule {}
