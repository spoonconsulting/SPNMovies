import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
    selector: 'movie-list',
    templateUrl: 'movie-list.html'
})
export class MovieListComponent {

    @Input() movies: Movie[];
    @Input() parentComponent: any;

    constructor() {}

    cardTapped(movie: Movie) {
        if (this.parentComponent)
            ( < any > this.parentComponent).didSelectMovie(movie);
    }

    doInfinite(){
       this.parentComponent.doInfinite();

    }
}