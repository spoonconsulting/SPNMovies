import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Movie, ErrorMessage } from './model';

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
@Injectable()
export class MoviesProvider {
  moviesData: Observable<any>;
  movies:  Movie[];
  
  constructor(public http: HttpClient) {
  }

  /*
  * initialise list of movies from API
  * return promise list movie 
  */
  getMovies(): Promise<Movie[] | ErrorMessage>{
    let movies = [];
    return new Promise((resolve, reject) => {
      this.http.get('https://yts.am/api/v2/list_movies.json').toPromise()
      .then(response => {
        console.log(response);
        let moviesList = response['data']['movies'];
        moviesList.forEach(element => {
          movies.push(new Movie(element));
        });
        resolve(movies);
      }).catch(error =>{
        let error_ = new ErrorMessage(error);
        console.log(error_);
        reject(error_);
      });
    })
  }

  getMoviesBy(param, value):Promise<Movie[] | ErrorMessage>{
   let favoritesMovies = [];
    return new Promise((resolve, reject) => {
      this.http.get('https://yts.am/api/v2/list_movies.json?'+param+'='+value).toPromise()
      .then(response => {
        console.log(response);
        let moviesList = response['data']['movies'];
        moviesList.forEach(element => {
          favoritesMovies.push(new Movie(element));
        });
        resolve(favoritesMovies);
      }).catch(error =>{
        let error_ = new ErrorMessage(error);
        console.log(error_);
        reject(error_);
      });
    })
  }

}
