import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';
import { User } from '../providers/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.css'
})
export class AppNavbarComponent implements OnInit {

  user: User;
  constructor(public AfService: AfService) { }

  ngOnInit() {
    this.AfService.user$.subscribe(user => this.user = user);
  }
  
}
