import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Movie {
  private url = "http://localhost:8080";

  constructor(private http: HttpClient) {}
  
  getAllMovies() {
    return this.http.get<any[]>(`${this.url}/api/movies`)
  }
}
