import { Component } from '@angular/core';

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

}
