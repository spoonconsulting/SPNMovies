import { Component, NgModule } from '@angular/core';
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
  names = [];
  segmentsPerRow = 3;
  rows = [];


  constructor(public navCtrl: NavController, public movProv: MoviesProvider) {
    this.initMoviesList();
    this.names = [
      {name: 'one'},
      {name: 'two'},
      {name: 'three'},
      {name: 'four'},
      {name: 'five'},
      {name: 'six'},
      {name: 'seven'},
      {name: 'eight'},
      {name: 'nine'},
      {name: 'ten'},
      {name: 'eleven'},
      {name: 'twelve'}
    ]
    this.segmentsPerRow = 3
    this.rows = Array.from(Array(Math.ceil(this.names.length / this.segmentsPerRow)).keys())
  }

  /**
   * initialised list of movies to show in latest section
   */
  initMoviesList(){
    this.movies =  this.movProv.getMovies().then((movies_) =>{
      console.log('movies:: ', movies_ );
      this.rows = Array.from(Array(Math.ceil(movies_.length / this.segmentsPerRow)).keys())
      return movies_;
    });
  }


}
