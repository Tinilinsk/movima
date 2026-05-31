import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
      constructor(private ayth: Auth) {
    }

    submit(form: any) {
      const value = form.value;
      console.log(value)

      this.ayth.registerUser(value).subscribe({
        next: (res) => {
          console.log("Added new user")
        },
        error: (err) => {
          console.log("Error: " + err)
        }
      })
    }
}
