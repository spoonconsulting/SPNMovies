import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'movies-grid',
    templateUrl: 'movies-grid.html'
})
export class MoviesGridComponent {
    @Input() movies: Movie[];
    @Input() parentComponent: any;

    constructor(public navCtrl: NavController) {}

    cardTapped(movie: Movie) {
        if (this.parentComponent)
            ( < any > this.parentComponent).didSelectMovie(movie);
    }
}