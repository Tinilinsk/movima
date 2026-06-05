import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Movie } from '../../services/movie';

@Component({
  selector: 'app-add-item-sheet',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-item-sheet.html',
  styleUrl: './add-item-sheet.css',
})
export class AddItemSheet {
  movieForm: FormGroup;
  isOpen = false; // Controls the visibility of our sheet window

  constructor(private fb: FormBuilder, private movieService: Movie) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      year: [new Date().getFullYear(), [Validators.required, Validators.min(1888)]],
      genres: [''], // We will split commas into an array on submit
      posterUrl: [''],
      status: ['watchlist', Validators.required],
      rating: [null],
      note: ['']
    });
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
      genres: formValue.genres ? formValue.genres.split(',').map((g: string) => g.trim()) : []
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
