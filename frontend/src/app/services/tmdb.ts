import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

export interface TmdbResult {
  id: number;
  title: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  poster_path: string;
  genre_ids: number[];
  media_type?: string;
}

@Injectable({ providedIn: 'root' })
export class Tmdb {
  private baseUrl = environment.tmdbBaseUrl;
  private apiKey = environment.tmdbApiKey;
  private imageUrl = environment.tmdbImageUrl;

  private genreMap: Record<number, string> = {
    28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy',
    80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family',
    14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music',
    9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV Movie',
    53: 'Thriller', 10752: 'War', 37: 'Western',
    10759: 'Action & Adventure', 10762: 'Kids', 10763: 'News',
    10764: 'Reality', 10765: 'Sci-Fi & Fantasy', 10766: 'Soap',
    10767: 'Talk', 10768: 'War & Politics'
  };

  constructor(private http: HttpClient) {}

  search(query: string): Observable<TmdbResult[]> {
    const url = `${this.baseUrl}/search/multi?api_key=${this.apiKey}&query=${encodeURIComponent(query)}`;

    return this.http.get<{ results: TmdbResult[] }>(url).pipe(
      map(res => res.results.filter(r =>
        r.media_type === 'movie' || r.media_type === 'tv'
      ))
    );
  }

  getPosterUrl(posterPath: string): string {
    return posterPath ? `${this.imageUrl}${posterPath}` : '';
  }

  getGenreNames(genreIds: number[]): string[] {
    return genreIds.map(id => this.genreMap[id]).filter(Boolean);
  }

  getYear(result: TmdbResult): number | null {
    const date = result.release_date || result.first_air_date;
    return date ? parseInt(date.split('-')[0]) : null;
  }

  getTitle(result: TmdbResult): string {
    return result.title || result.name || '';
  }

  getType(result: TmdbResult): 'movie' | 'series' {
    return result.media_type === 'tv' ? 'series' : 'movie';
  }
}
