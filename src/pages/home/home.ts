import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MoviesProvider } from '../../providers/movies/movies';
import { Movie, ErrorMessage, Log } from '../../providers/movies/model';
import { SaveMovieProvider } from '../../providers/save-movie/save-movie';

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
  showLog: boolean = true;
  movies: Promise<void | Movie[] | ErrorMessage>;
  errorMessage: ErrorMessage;
  
  favorites: Promise<void | Movie[] | ErrorMessage>;
  errorMessageFavorites: ErrorMessage;

  constructor(public navCtrl: NavController, 
    public movProv: MoviesProvider, 
    public saveMovieProv: SaveMovieProvider) {
      this.initBD();
  }

  ngOnInit(){
    this.initMoviesList();
    this.initFavoritesList();
  }

  /**
   * initialised list of movies to show in latest section
   */
  initMoviesList(){
    this.movies  = this.movProv.getMovies().then((movies_) =>{
      new Log('initMoviesList', movies_, this.showLog);
      return movies_;
    }).catch(error => {
      this.errorMessage = error;
    });
  }

  initFavoritesList(){
    this.favorites = this.saveMovieProv.getFavorite().then((movies_) => {
      new Log('initFavoritesList', movies_, this.showLog);
      return movies_;
    }).catch(error => {
      new Log('initFavoritesList', error, this.showLog);
      this.errorMessageFavorites = error;
    });
    // this.favorites = this.movProv.getMoviesBy("minimum_rating", 7).then((movies_) => {
    //   new ErrorLog('initFavoritesList', movies_, this.showLog);
    //   return movies_;
    // }).catch(error => {
    //   this.errorMessageFavorites = error;
    // });
  }

  initBD(){
    this.saveMovieProv.createFavoriteTable().then((response) =>{
      new Log('initBD', response, this.showLog);
    }).catch(error => {
      new Log('initBD', error, this.showLog);
    });
  }


}
