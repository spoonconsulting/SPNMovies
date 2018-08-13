import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from '../../providers/movie-service';
import { Movie } from '../../models/movie';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public currentTab = "latest";
    public movieList:Movie[];
    public topRatedMovieList:Movie[];

    constructor(public navCtrl: NavController, public movieService: MovieService) {
        this.movieService.getMovies().subscribe(movies=>{
            console.log("got movies",movies);
            this.movieList=movies;
        });
    }

}