import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieActorComponent } from './components/movie-actor/movie-actor.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'shop', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'shows', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'about-us', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MovieDetailsComponent },
  { path: 'list', component: MoviesListComponent },
  { path: 'actor', component: MovieActorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
