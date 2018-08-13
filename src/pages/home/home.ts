import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

import { Movie } from '../../providers/movies/model';

/**
 * @author 	SC (SRA)
 * @version 1.0
 * @since	10/08/2018
 *
 * Describe here what the class do
 * 
 *-- Maintenance History: 
 *--
 *-- Date         Name  Version  Remarks 
 *-- -----------  ----  -------  -------------------------------------------------------
 *-- 10-AUG-2018  SRA    1.0     Initial version
 *--------------------------------------------------------------------------------------
 * 
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  segment = 'latest';
  movies: Promise<Movie[]>;
  favorites: Promise<Movie[]>;

  constructor(public navCtrl: NavController, public movProv: MoviesProvider) {
    this.initMoviesList();
    this.initFavoritesList();
  }

  /**
   * initialised list of movies to show in latest section
   */
  initMoviesList(){
    this.movies =  this.movProv.getMovies().then((movies_) =>{
      console.log('movies:: ', movies_ );
      return movies_;
    });
  }

  initFavoritesList(){
    this.favorites = this.movies.then((movies_) => {
      return movies_.filter((item) =>{
        return item.rating > 7
      });
    });
  }


}
