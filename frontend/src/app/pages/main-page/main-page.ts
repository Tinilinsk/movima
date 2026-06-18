import { Component, signal } from '@angular/core';
import { Auth } from '../../services/auth';
import { Movie } from '../../services/movie';
import { AddItemSheet } from '../add-item-sheet/add-item-sheet';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [AddItemSheet],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})

export class MainPage {

  movies = signal<any[]>([]);

  private router = inject(Router);

  constructor(private auth: Auth, private movie: Movie) {
      this.movie.getStatusMovie("watchlist").subscribe({
      next: (data) => {
        this.movies.set(data); 
      },
      error: (err) => {
        console.error("HTTP Request failed!", err);
      }
    });
    }
  
    watchedPage() {
      this.router.navigate(['/watched'])
    }
  

  logout() {
    this.auth.logoutUser();
    window.location.reload();
   }
}


