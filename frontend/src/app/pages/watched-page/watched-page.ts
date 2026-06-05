import { Component, signal } from '@angular/core';
import { AddItemSheet } from '../add-item-sheet/add-item-sheet';
import { Movie } from '../../services/movie';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-watched-page',
  imports: [AddItemSheet],
  templateUrl: './watched-page.html',
  styleUrl: './watched-page.css',
})
export class WatchedPage {
  movies = signal<any[]>([]);

  private router = inject(Router);

  constructor(private movie: Movie) {
    this.movie.getStatusMovie("watched").subscribe({
      next: (data) => {
        this.movies.set(data);
      },
      error: (err) => {
        console.log("Error" + err)
      }
    })
  }

  homePage() {
    this.router.navigate(['/'])
  }
}
