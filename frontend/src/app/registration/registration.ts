import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
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
