import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TitleService } from 'src/app/core/title/title.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  username: string;
  password: string;

  constructor(public auth: AuthService, private titleService: TitleService) {
    this.titleService.setTitle('Profile');
  }

  ngOnInit() {}
}
