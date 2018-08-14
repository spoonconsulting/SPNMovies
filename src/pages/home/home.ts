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
        this.loadMovies(false);
    }

    private loadMovies(isTopRated) {
        console.log("loadMovies");
        this.movieService.getMovies(isTopRated).subscribe(movies => {
            console.log("loadMovies res tab: ", this.currentTab);
            if (this.currentTab == "latest") {
                this.movieList = movies;
            } else {
                this.topRatedMovieList = movies;
            }
        }, err => this.alertController.create({
            title: 'Cannot Fetch Movies',
            subTitle: 'We are sorry our server is under maintenance.',
            buttons: ['OK']
        }).present());
    }
}