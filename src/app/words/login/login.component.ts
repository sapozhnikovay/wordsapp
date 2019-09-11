import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}
  async googleSignIn() {
    try {
      await this.auth.googleSignin();
      this.router.navigate(['/']);
    } catch (error) {
      console.log(error);
    }
  }

  async facebookSignIn() {
    try {
      await this.auth.facebookSignin();
      this.router.navigate(['/']);
    } catch (error) {
      console.log(error);
    }
  }
}
