import { Component } from '@angular/core';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  constructor(private auth: Auth) {

  }
  info() {
    console.log(this.auth.getToken())
  }

  logout() {
    this.auth.logoutUser();
    window.location.reload();
   }
}


