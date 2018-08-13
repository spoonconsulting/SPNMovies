import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
    selector: 'movies-grid',
    templateUrl: 'movies-grid.html'
})
export class MoviesGridComponent{
  @Input() movies: Movie[];
}