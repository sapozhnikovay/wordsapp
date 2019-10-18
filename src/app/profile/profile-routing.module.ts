import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from '@app/profile/pages/user-profile/user-profile.component';
import { MainLayoutComponent } from '@app/layout/main-layout/main-layout.component';

const PROFILE_ROUTES = [
  {
    path: 'profile',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: UserProfileComponent,
        data: { showBackButton: true }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(PROFILE_ROUTES)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
