import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule
  ]
})
export class PagesModule { }
