import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from '../../providers/movie-service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    
    public currentTab="latest";

    constructor(public navCtrl: NavController) {
       
        
    constructor(public navCtrl: NavController, public movieService: MovieService) {
        this.movieService.getMovies().subscribe(movies=>{
            console.log("got movies",movies);
            
        });
    }

}