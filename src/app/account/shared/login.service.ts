import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth';
import { from } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private auth: AuthService, private _router: Router) {}

  public googleSignIn(): void {
    from(this.auth.googleSignin()).subscribe(() => this._router.navigate(['/']), error => console.log(error));
  }

  public facebookSignIn(): void {
    from(this.auth.facebookSignin()).subscribe(() => this._router.navigate(['/']), error => console.log(error));
  }
}
