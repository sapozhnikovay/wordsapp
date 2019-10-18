import { Component, OnInit } from '@angular/core';
import { LoginService } from '@app/account/shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public loginService: LoginService) {}

  ngOnInit() {}
}
