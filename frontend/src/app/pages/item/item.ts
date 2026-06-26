import { Component, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../services/movie';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item implements OnInit {
  movies = signal<any | null>(null);
  noteDraft: string = '';
  noteSaved = false;

  statusOptions = ['watchlist', 'watching', 'watched'];
  private movieId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movie: Movie
  ) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id') || '';
    this.loadMovie();
  }

  loadMovie() {
    this.movie.getById(this.movieId).subscribe({
      next: (data) => {
        this.movies.set(data);
        this.noteDraft = data.note || '';
      },
      error: (err) => {
        console.error('Failed to load movie', err);
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  deleteMovie() {
    if (!confirm('Delete this title? This cannot be undone.')) return;

    this.movie.delete(this.movieId).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Failed to delete movie', err);
      }
    });
  }

  updateStatus(status: string) {
    const current = this.movies();
    if (!current) return;

    this.movie.update(this.movieId, { ...current, status }).subscribe({
      next: (updated) => {
        this.movies.set(updated);
      },
      error: (err) => {
        console.error('Failed to update status', err);
      }
    });
  }

  updateRating(rating: number) {
    const current = this.movies();
    if (!current) return;

    this.movie.update(this.movieId, { ...current, rating }).subscribe({
      next: (updated) => {
        this.movies.set(updated);
      },
      error: (err) => {
        console.error('Failed to update rating', err);
      }
    });
  }

  saveNote() {
    const current = this.movies();
    if (!current) return;

    this.movie.update(this.movieId, { ...current, note: this.noteDraft }).subscribe({
      next: (updated) => {
        this.movies.set(updated);
        this.noteSaved = true;
        setTimeout(() => this.noteSaved = false, 1500);
      },
      error: (err) => {
        console.error('Failed to save note', err);
      }
    });
  }
}
