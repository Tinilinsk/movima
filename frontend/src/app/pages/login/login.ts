import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { inject, ChangeDetectorRef } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  invalid: boolean = false;

  private cdr = inject(ChangeDetectorRef);

  private router = inject(Router);

  constructor(private auth: Auth) {

  }

  submit(form: any) {
    const value = form.value;
    this.auth.loginUser(value).subscribe({
        next: (res) => {
          this.invalid = false;
          this.cdr.detectChanges();
          this.router.navigateByUrl('/')
        },
        error: (err) => {
          this.invalid = true;
          this.cdr.detectChanges();
        }
      })
    }
}
