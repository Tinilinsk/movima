import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  private router = inject(Router);

        constructor(private ayth: Auth) {
    }
    
    submit(form: any) {
      const value = form.value;
      console.log(value)

      this.ayth.registerUser(value).subscribe({
        next: (res) => {
          console.log("Added new user")
          this.router.navigate(['home'])
        },
        error: (err) => {
          console.log("Error: " + err)
        }
      })
    }
}
