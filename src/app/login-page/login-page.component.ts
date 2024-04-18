import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';
import { User } from '../providers/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent implements OnInit {
  user: User;

  constructor(public AfService: AfService) { }

  ngOnInit() {
    this.AfService.user$.subscribe(user => this.user = user);
  }
  login() {
    this.AfService.loginWithGoogle();
  }
}
