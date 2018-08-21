import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
    selector: 'movies-grid',
    templateUrl: 'movies-grid.html'
})
export class MoviesGridComponent {
    @Input() movies: Movie[];
    @Input() parentComponent: any;

    constructor() {}

    cardTapped(movie: Movie) {
        if (this.parentComponent)
            ( < any > this.parentComponent).didSelectMovie(movie);
    }
}