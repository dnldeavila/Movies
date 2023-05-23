import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes:Routes=[
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'movie/:id',
    component: MoviesComponent,
  },
  {
    path: '**',
    redirectTo:'/home',
  },
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
