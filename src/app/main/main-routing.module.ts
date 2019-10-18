import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from '@app/layout/main-layout/main-layout.component';
import { MainScreenComponent } from '@app/main/pages/main-screen/main-screen.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { MainScreenToolbarComponent } from '@app/main/components/main-screen-toolbar/main-screen-toolbar.component';
import { EditWordsetComponent } from '@app/main/pages/edit-wordset/edit-wordset.component';
import { PublicListComponent } from '@app/main/pages/public-list/public-list.component';
import { PublicListDetailsComponent } from '@app/main/pages/public-list-details/public-list-details.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const MAIN_ROUTES = [
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
        path: 'edit/:name',
        component: EditWordsetComponent,
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
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(MAIN_ROUTES)],
  exports: [RouterModule]
})
export class MainRoutingModule {}