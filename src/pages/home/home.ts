import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MovieService } from '../../providers/movie-service';
import { Movie } from '../../models/movie';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public currentTab = "latest";
    public movieList: Movie[];
    public topRatedMovieList: Movie[];

    constructor(public navCtrl: NavController, public movieService: MovieService, private alertController: AlertController) {
        this.movieList = [];
        this.topRatedMovieList = [];
        this.loadMovies(false);
    }

    private loadMovies(isTopRated) {
        if ( this.movieList.length == 0 || this.topRatedMovieList.length == 0) {
            this.movieService.getMovies(isTopRated).subscribe( movies => {
                if (this.currentTab == "latest") {
                    this.movieList = movies;
                } else {
                    this.topRatedMovieList = movies;
                }
            }, err => this.alertController.create({
                title: 'Error',
                subTitle: 'Unable to fetch movies.\nPlease try again later.',
                buttons: ['OK']
            }).present());
        }
    }
}