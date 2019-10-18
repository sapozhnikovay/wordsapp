import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  constructor(public loginService: LoginService) {}

  ngOnInit() {}
}
