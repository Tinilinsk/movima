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

  Movie: boolean = true;
  Series: boolean = true;

  filterAll() {
    this.Movie = true;
    this.Series = true;
  }

  filterMovie() {
    this.Movie = true;
    this.Series = false;
  }

  filterSeries() {
    this.Movie = false;
    this.Series = true;
  }

    goToMovie(id: string) {
      this.router.navigate(['/movies', id]);
    }

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
