import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Movie } from './model';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {
  moviesData: Observable<any>;
  movies:  Movie[] = [];
  
  constructor(public http: HttpClient) {
    this.moviesData = this.http.get('https://yts.am/api/v2/list_movies.json');
  }

  getMovies(){
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
