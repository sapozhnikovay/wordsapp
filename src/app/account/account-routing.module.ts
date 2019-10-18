import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectLoggedInToMain = () => redirectLoggedInTo(['']);

const ACCOUNT_ROUTES = [
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
  imports: [RouterModule.forChild(ACCOUNT_ROUTES)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
