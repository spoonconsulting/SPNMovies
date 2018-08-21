import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movie } from '../../models/movie';
import { MovieService } from '../../providers/movie-service';

@IonicPage()
@Component({
    selector: 'page-movie-detail',
    templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

    movie: Movie;
    testers: any;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public movieService: MovieService) {

        this.movie = this.navParams.get('movie');
    }

    ionViewDidLoad() {
        console.log('');
    }

    backButton() {
        this.navCtrl.pop();
    }

    public saveToFavorite() {
        this.movieService.saveToFavorite(this.movie).then(() => console.log("top net")).catch(e => console.error("pan resi save"));
    }


}