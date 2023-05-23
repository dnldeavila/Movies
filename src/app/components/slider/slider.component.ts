import { AfterViewInit, Component,Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/play-response';
import  Swiper  from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit, AfterViewInit{
 
  @Input() movies: Movie[] = [];
  public mySwiper!: Swiper;

  constructor () {}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      loop: true,
    });
  }

  ngOnInit(): void {
   
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }
  onSlideNext(){
    this.mySwiper.slideNext();
  }

}
