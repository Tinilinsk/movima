import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-registration',
  imports: [FormsModule, RouterLink],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
    private router = inject(Router);

    constructor(private ayth: Auth) {

    }
    submit(form: any) {
      const value = form.value;
      this.ayth.registerUser(value).subscribe({
        next: (res) => {
          this.router.navigateByUrl('/')
        },
        error: (err) => {
          console.log("Error: " + err)
        }
      })
    }
}
