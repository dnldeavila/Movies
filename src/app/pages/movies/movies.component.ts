import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { MoviesService } from 'src/app/services/movies.service';
import { Cast } from 'src/app/interfaces/credits-response';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {

  public pelicula!: MovieResponse;
  public cast:Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location,
    private router:Router) {}

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([

      this.moviesService.getMovieDetails(id),
      this.moviesService.getCast(id)

    ]).subscribe(([pelicula,cast])=>{
      if (!pelicula){
        this.router.navigateByUrl('/home'); 
        return;
      }
      this.pelicula = pelicula;

      this.cast =cast.filter(actor=>actor.profile_path !== null);

    });
  }

  back() {
    this.location.back();
  }
}
