import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Api } from './services/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
      constructor(private api: Api) {
    }

    submit(form: any) {
      const value = form.value;
      console.log(value)

      this.api.registerUser(value).subscribe({
        next: (res) => {
          console.log("Added new user")
        },
        error: (err) => {
          console.log("Error: " + err)
        }
      })
    }
}
