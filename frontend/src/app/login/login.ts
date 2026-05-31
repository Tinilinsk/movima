import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private router = inject(Router);

  constructor(private auth: Auth) {

  }

  submit(form: any) {
    const value = form.value;
    console.log(value)

    this.auth.loginUser(value).subscribe({
        next: (res) => {
          console.log("Succeses login")
          this.router.navigateByUrl('/')
        },
        error: (err) => {
          console.log("Error: " + err)
        }
      })
    }
}
