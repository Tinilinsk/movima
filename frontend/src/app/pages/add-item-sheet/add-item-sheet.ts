import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Movie } from '../../services/movie';
import { Tmdb, TmdbResult } from '../../services/tmdb';

@Component({
  selector: 'app-add-item-sheet',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-item-sheet.html',
  styleUrl: './add-item-sheet.css',
})
export class AddItemSheet {
  movieForm: FormGroup;
  searchResults: TmdbResult[] = [];
  isOpen = false; // Controls the visibility of our sheet window
  showDropdown = false;

  private searchSubject = new Subject<string>();

  selectedType: 'movie' | 'series' = 'movie';

  selectType(type: 'movie' | 'series'): void {
    this.selectedType = type;
  }

  constructor(private fb: FormBuilder, private movieService: Movie, public tmdb: Tmdb) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      year: [new Date().getFullYear(), [Validators.required, Validators.min(1888)]],
      genres: [''], // We will split commas into an array on submit
      platform: [''],
      posterUrl: [''],
      type: [''],
      status: ['watchlist', Validators.required],
      priority: [''],
      rating: [null],
      note: ['']
    });

    this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(query => query.length > 1
        ? this.tmdb.search(query)
        : [])
    ).subscribe(results => {
      this.searchResults = results.slice(0, 6);
      this.showDropdown = this.searchResults.length > 0;
    });
  }

  onTitleInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchSubject.next(value);
  }

  selectResult(result: TmdbResult) {
    this.movieForm.patchValue({
      title: this.tmdb.getTitle(result),
      year: this.tmdb.getYear(result),
      genres: this.tmdb.getGenreNames(result.genre_ids).join(', '),
      posterUrl: this.tmdb.getPosterUrl(result.poster_path),
      type: this.tmdb.getType(result)
    });

    this.showDropdown = false;
    this.searchResults = [];
  }

  closeDropdown() {
    setTimeout(() => {
      this.showDropdown = false;
    }, 200);
  }

  openSheet() {
    this.isOpen = true;
  }

  closeSheet() {
    this.isOpen = false;
    this.movieForm.reset({ status: 'watchlist', year: new Date().getFullYear() });
  }

  onSubmit() {
    if (this.movieForm.invalid) return;

    const formValue = this.movieForm.value;
    
    // Convert comma-separated string of genres into an array of strings
    const formattedMovie = {
      ...formValue,
      genres: formValue.genres ? formValue.genres.split(',').map((g: string) => g.trim()) : [],
      type: this.selectedType
    };

    this.movieService.addMovie(formattedMovie).subscribe({
      next: (newMovie) => {
        console.log('Movie added successfully!', newMovie);
        this.closeSheet(); // Close the drawer on success
        // Optional: Refresh your movie list here
      },
      error: (err) => console.error('Error adding movie', err)
    });
  }
}
