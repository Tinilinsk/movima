import { Component, signal } from '@angular/core';
import { Auth } from '../services/auth';
import { Movie } from '../services/movie';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})

export class MainPage {

  movies = signal<any[]>([]);

  constructor(private auth: Auth, private movie: Movie) {
      this.movie.getAllMovies().subscribe({
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


