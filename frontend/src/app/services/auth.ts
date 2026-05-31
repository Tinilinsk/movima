import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private url = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  registerUser(data: any) {
    return this.http.post<{token: string}>(`${this.url}/api/auth/register`, data)
    .pipe(tap(response => 
    {localStorage.setItem('token', response.token)}
    ));
  }

  loginUser(data: any) {
    return this.http.post<{token: string}>(`${this.url}/api/auth/login`, data).pipe(tap(response => 
      {localStorage.setItem('token', response.token)}));
  }

  logoutUser() {
    localStorage.removeItem('token')
  }
}
