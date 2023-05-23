import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/play-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public moviesSlider: Movie[] = [];
  
  @HostListener('window:scroll',['$event'])
  onWindowScroll(){

    const pos=(document.documentElement.scrollTop || document.body.scrollTop) + 1000; 
    const max=(document.documentElement.scrollHeight || document.body.scrollHeight);

    if(pos>max){
      if(this.moviesService.loading){return;}

      this.moviesService.getCartelera().subscribe(movies=>{
         this.movies.push(...movies);
      });
    }
    
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {

    this.moviesService.getCartelera()
    .subscribe(movies => {
      // console.log(data.results);
      this.movies = movies; 
      this.moviesSlider=movies;
    });
  }
}
