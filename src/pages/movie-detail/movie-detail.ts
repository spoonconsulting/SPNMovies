import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Movie } from '../../models/movie';
import { MovieService } from '../../providers/movie-service';
import { SearchPage } from '../search/search';

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
        private alertController: AlertController) {
        this.movie = this.navParams.get('movie');
        this.movieService.isMovieFavorite(this.movie).then(f => this.isFavorite = f).catch(err=> console.error(err));
    }

    goBack() {
        this.navCtrl.pop();
    }

    public saveToFavorite() {
        this.movieService.saveToFavorite(this.movie)
        .then(() => {this.isFavorite = true})
        .catch(e => this.showErrorAlert());
        this.isFavorite = true;
    }

    searchMovie(){
        this.navCtrl.push(SearchPage);
    }

    onScroll(event) {
        this.headerVisible = event.directionY != "up";   
    }

    showErrorAlert() {
        this.alertController.create({
            title: 'Error',
            subTitle: 'Unable to fetch movies.\nPlease try again later.',
            buttons: ['OK']
        }, ).present()
    }

    updateFavoriteStatus(){
        this.isFavorite?this.removeFromFavorites():this.saveToFavorite();
    }

    removeFromFavorites(){
        this.movieService.removeFromFavorites(this.movie)
        .then(()=>this.isFavorite = false)
        .catch(e => this.showErrorAlert());
    }

}