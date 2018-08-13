import { Component } from '@angular/core';

import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../providers/movie-service';
/**
 * Generated class for the MoviesGridComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movies-grid',
  templateUrl: 'movies-grid.html'
})
export class MoviesGridComponent {

  public movies = [];

  constructor() {
    for(var i of [1,2,3,4,5,6,7,8,9,10,11]){
      var movie = {
          name: `catMovie ${i}`,
          posterUrl:`http://thecatapi.com/api/images/get?format=src&type=png&name=est_${i}`
      };
      
     this.movies.push(movie);  

  }
  }
export class MoviesGridComponent implements OnInit{
  @Input() movies: Movie[];
    constructor(private movieService: MovieService) {
  
    }

    ngOnInit(): void {
      this.getMovies();
    }
    
    getMovies():void{
      console.log("hey");
      this.movieService.getMovies().subscribe(movies=>this.movies= movies);
    }
}