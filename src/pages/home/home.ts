import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MovieService } from '../../providers/movie-service';
import { Movie } from '../../models/movie';
import { MovieDetailPage } from '../movie-detail/movie-detail';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public currentTab = "latest";
    public movieList: Movie[];
    public topRatedMovieList: Movie[];
    public isLoading: boolean = false;

    constructor(public navCtrl: NavController,
        public movieService: MovieService,
        private alertController: AlertController) {
        this.movieList = [];
        this.topRatedMovieList = [];
        this.loadMovies(false);
    }
    private loadMovies(isTopRated) {
        if (!this.movieList.length || !this.topRatedMovieList.length) {
            this.isLoading = true;
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
                    this.alertController.create({
                        title: 'Error',
                        subTitle: 'Unable to fetch movies.\nPlease try again later.',
                        buttons: ['OK']
                    }, ).present()
                }
            );
        }
    }
    private didSelectMovie(movie: Movie) {
        this.navCtrl.push(MovieDetailPage, { "movie": movie });
    }

    showMovie(){
        this.movieService.getFavoriteMovies().then( movies=>
            console.log(movies)
        ).catch(err=> console.log("error catched"));
    }
}