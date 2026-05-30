import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private url = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  registerUser(data: any) {
    return this.http.post(`${this.url}/api/auth/register`, data);
  }

  loginUser(data: any) {
    return this.http.post(`${this.url}/api/auth/login`, data)
  }

}
