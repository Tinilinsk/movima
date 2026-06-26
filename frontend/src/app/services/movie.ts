import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Movie {
  private url = "http://localhost:8080/api/movies";

  constructor(private http: HttpClient) {}
  
  getAllMovies() {
    return this.http.get<any[]>(`${this.url}`)
  }

  addMovie(data: any) {
    return this.http.post(`${this.url}`, data);
  }

  getStatusMovie(param: string) {
    return this.http.get<any[]>(`${this.url}?status=${param}`)
  }
  
  getById(id: string) {
    return this.http.get<any>(`${this.url}/${id}`)
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }

  update(id: string, data: any) {
    return this.http.put(`${this.url}/${id}`, data)
  }
}
