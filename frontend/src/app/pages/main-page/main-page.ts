import { Component, signal } from '@angular/core';
import { Auth } from '../../services/auth';
import { Movie } from '../../services/movie';
import { AddItemSheet } from '../add-item-sheet/add-item-sheet';

@Component({
  selector: 'app-main-page',
  imports: [AddItemSheet],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})

export class MainPage {

  movies = signal<any[]>([]);

  constructor(private auth: Auth, private movie: Movie) {
      this.movie.getStatusMovie("watchlist").subscribe({
      next: (data) => {
        this.movies.set(data);
        console.log("Here is your actual backend data:", this.movies()); 
      },
      error: (err) => {
        console.error("HTTP Request failed!", err);
      }
    });
    }
  

  

  logout() {
    this.auth.logoutUser();
    window.location.reload();
   }
}


