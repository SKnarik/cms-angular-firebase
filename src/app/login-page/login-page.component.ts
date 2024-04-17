import { Component } from '@angular/core';
import { AfService } from '../providers/af.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(public AfService: AfService) { }

  login() {
    this.AfService.loginWithGoogle();
  }
}
