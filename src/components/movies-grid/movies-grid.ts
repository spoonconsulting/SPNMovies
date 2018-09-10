import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { AlertController } from '../../../node_modules/ionic-angular';

@Component({
    selector: 'movies-grid',
    templateUrl: 'movies-grid.html'
})
export class MoviesGridComponent {
    @Input() movies: Movie[];
    @Input() parentComponent: any;

    constructor(public alertCtrl: AlertController) {}

    cardTapped(movie: Movie) {
        if (this.parentComponent)
            ( < any > this.parentComponent).didSelectMovie(movie);
    }

    popOption(movie){
        if(this.parentComponent.isShowingFavorite){
            let alert = this.alertCtrl.create({
                title: 'Confirmation',
                message: 'Are you sure you want to remove this movie from favorites?',
                buttons: [
                    {
                        text: 'No',
                        handler: () => null
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                        this.parentComponent.movieList.splice(this.parentComponent.movieList.indexOf(movie),1);
                        this.parentComponent.movieService.removeFromFavorites(movie);
                       
                        }
                    }
                ]
            })
            alert.present();
        }
    }
}