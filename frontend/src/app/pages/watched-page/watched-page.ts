import { Component, signal } from '@angular/core';
import { AddItemSheet } from '../add-item-sheet/add-item-sheet';
import { Movie } from '../../services/movie';

@Component({
  selector: 'app-watched-page',
  imports: [AddItemSheet],
  templateUrl: './watched-page.html',
  styleUrl: './watched-page.css',
})
export class WatchedPage {
  movies = signal<any[]>([]);

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
}
