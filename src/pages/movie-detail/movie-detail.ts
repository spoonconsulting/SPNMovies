import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movie } from '../../models/movie';

@IonicPage()
@Component({
    selector: 'page-movie-detail',
    templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

    movie: Movie;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.movie = this.navParams.get('movie');
    }

    ionViewDidLoad() {
        console.log('');
    }

    backButton() {
        this.navCtrl.pop();
    }

}