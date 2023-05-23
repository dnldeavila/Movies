import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-cast-slider',
  templateUrl: './cast-slider.component.html',
  styleUrls: ['./cast-slider.component.css']
})
export class CastSliderComponent implements OnInit, AfterViewInit {
  
  @Input() cast!:Cast[];

  constructor(){}
  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
    const swiper= new Swiper('.swiper',{
    slidesPerView:5.3,
    freeMode:true,
    spaceBetween:15
    });
  }

}
