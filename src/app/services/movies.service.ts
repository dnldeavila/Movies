import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie, PlayResponse } from '../interfaces/play-response';
import { catchError, map, tap } from 'rxjs/operators';
import { MovieResponse } from '../interfaces/movie-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root',
})

export class MoviesService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private moviePage = 1;
  public loading: boolean = false;

  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: 'f269218f9ac41fda847402ed563424ef',
      language: 'en-US',
      page: this.moviePage,
    };
  }

  getCartelera(): Observable<Movie[]> {
    if (this.loading) {
      return of([]);
    }

    this.loading = true;
    return this.http
      .get<PlayResponse>(`${this.baseUrl}/movie/popular?`, {
        params: this.params,
      })
      .pipe(
        map((data) => data.results),
        tap(() => {
          this.moviePage += 1;
          this.loading = false;
        })
      );
  }

  getMovieDetails(id: string) {
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`, {
      params: this.params,
    }).pipe(
      catchError(err=>of(null)) 
    )
  }

  getCast(id: string):Observable<Cast[]> {
    return this.http
      .get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`, {
        params: this.params,
      }).pipe(
        map((data) => data.cast),
        catchError(err=>of([])),
        );
  }
}
