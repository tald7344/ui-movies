import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';

import { MovieRoutingModule } from './movie-routing.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieActorComponent } from './components/movie-actor/movie-actor.component';


@NgModule({
  declarations: [MovieDetailsComponent, MoviesListComponent, MovieActorComponent],
  imports: [
    ThemeModule,
    MovieRoutingModule,
    IvyCarouselModule,
  ]
})
export class MovieModule { }
