import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { MovieService } from '../../providers/movie-service';
import { Movie } from '../../models/movie';
import { MovieDetailPage } from '../../pages/movie-detail/movie-detail';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public currentTab = "latest";
    public movieList: Movie[];
    public topRatedMovieList: Movie[];
    public loading: Loading;

    constructor(public navCtrl: NavController,
        public movieService: MovieService,
        private alertController: AlertController,
        public loadingCtrl: LoadingController) {
        this.movieList = [];
        this.topRatedMovieList = [];

        this.loadMovies(false);
    }

    private loadMovies(isTopRated) {

        if (!this.movieList.length || !this.topRatedMovieList.length) {
            this.loading = this.loadingCtrl.create({
                cssClass: 'activity-detail-loading'
            })
            this.loading.present();
            this.movieService.getMovies(isTopRated).subscribe(movies => {
                    this.loading.dismiss();
                    if (this.currentTab == "latest") {
                        this.movieList = movies;
                    } else {
                        this.topRatedMovieList = movies;
                    }
                },
                err => {
                    this.loading.dismiss();
                    this.alertController.create({
                        title: 'Error',
                        subTitle: 'Unable to fetch movies.\nPlease try again later.',
                        buttons: ['OK']
                    }, ).present()
                },

            );
        }
    }
    private didSelectMovie(movie: Movie) {
        this.navCtrl.push(MovieDetailPage, { "movie": movie });
    }
}