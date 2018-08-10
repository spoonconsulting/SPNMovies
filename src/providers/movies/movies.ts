import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Movie } from './model';

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
  movies:  Movie[] = [];
  
  constructor(public http: HttpClient) {
    this.init();
  }

  /**
   * initialise list of movies from API
   * 
   */
  init(){
    this.moviesData = this.http.get('https://yts.am/api/v2/list_movies.json');
  }

  /*
  * get movies from data return by API
  * return promise list movie 
  */
  getMovies(): Promise<Movie[]>{
    return new Promise((resolve, reject) => {
      this.moviesData.subscribe(data =>{
        let moviesList = data['data']['movies'];
        moviesList.forEach(element => {
          this.movies.push(new Movie(element));
        });
        resolve(this.movies);
      });
    })
  }

}
