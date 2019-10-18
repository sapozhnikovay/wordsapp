import { NgModule } from '@angular/core';
import { UIModule } from '@app/ui/ui.module';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './shared/login.service';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [UIModule, AccountRoutingModule],
  exports: [AccountRoutingModule],
  declarations: [LoginComponent, LoginLayoutComponent],
  providers: [LoginService]
})
export class AccountModule {}
