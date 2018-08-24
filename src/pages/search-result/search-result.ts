import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Movie } from '../../models/movie';
import { MovieDetailPage } from '../../pages/movie-detail/movie-detail';

@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResult {

  movies: Movie[];

  constructor(public navController: NavController,public navParams: NavParams) {
    this.movies= this.navParams.get('movies');
  }

  private didSelectMovie(movie: Movie){
    this.navController.push(MovieDetailPage, {"movie":movie});
  }
  
}
