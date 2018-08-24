import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { MovieService } from '../../providers/movie-service';
import { Movie } from '../../models/movie';
import { MovieDetailPage } from '../movie-detail/movie-detail';
import { SearchPage } from '../search/search';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public currentTab = "latest";
    public movieList: Movie[];
    public topRatedMovieList: Movie[];
    public isLoading: boolean = false;
    public isShowingFavorite: boolean = false;

    constructor(public navCtrl: NavController,
        public movieService: MovieService,
        private alertController: AlertController,
        private navParams: NavParams) {
        this.isShowingFavorite = this.navParams.get('showFavorite');
        this.movieList = [];
        this.topRatedMovieList = [];
        this.loadMovies(false);
    }

    private loadMovies(isTopRated) {
        if (!this.movieList.length || !this.topRatedMovieList.length) {
            this.isLoading = true;
            if (this.isShowingFavorite) {
                this.movieService.getFavoriteMovies().then(favoriteMovies => {
                    this.movieList = favoriteMovies;
                    this.isLoading = false;
                }).catch(err => {
                    this.isLoading = false;
                    this.showErrorAlert();
                });
            } else {
                this.movieService.getMovies(isTopRated).subscribe(movies => {
                        this.isLoading = false;
                        if (this.currentTab == "latest") {
                            this.movieList = movies;
                        } else {
                            this.topRatedMovieList = movies;
                        }
                    },
                    err => {
                        this.isLoading = false;
                        this.showErrorAlert();
                    });
            }
        }
    }
     
    goToFavorites() {
        this.navCtrl.push(HomePage, { showFavorite: true });
    }

    showErrorAlert() {
        this.alertController.create({
            title: 'Error',
            subTitle: 'Unable to fetch movies.\nPlease try again later.',
            buttons: ['OK']
        }, ).present()
    }

    private didSelectMovie(movie: Movie){
        this.navCtrl.push(MovieDetailPage, {"movie":movie});
    }

    onSearchIconTapped(){    
        this.navCtrl.push(SearchPage);
    }
}