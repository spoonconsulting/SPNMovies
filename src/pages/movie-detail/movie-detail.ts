import { Component, ChangeDetectorRef } from '@angular/core';
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
    isFavorite: boolean = false;
    headerVisible: boolean = false;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public movieService: MovieService,
        public changeDetectorRef: ChangeDetectorRef) {

        this.movie = this.navParams.get('movie');
        this.movieService.isMovieFavorite(this.movie).then(
            f => this.isFavorite = f
        ).catch();
    }

    ionViewDidLoad() {
        console.log('');
    }

    backButton() {
        this.navCtrl.pop();
    }

    public saveToFavorite() {
        this.movieService.saveToFavorite(this.movie)
        .then(() => {this.isFavorite = true})
        .catch(e => console.error("pan resi save ici "));
    }

    onScroll(event) {
        if (event.directionY == "up") {
          this.headerVisible = false;
        } else {
          this.headerVisible = true;
        }
        this.changeDetectorRef.detectChanges();
      }
}