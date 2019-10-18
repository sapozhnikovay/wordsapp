import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { UserProfileComponent } from '@app/profile/pages/user-profile/user-profile.component';
import { UIModule } from '@app/ui/ui.module';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [ProfileRoutingModule, UIModule],
  exports: [ProfileRoutingModule]
})
export class ProfileModule {}
