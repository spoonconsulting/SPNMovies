import { Component, Input } from '@angular/core';
import { Movie } from '../../providers/movies/model';

/**
 * Generated class for the MovieCardDescriptionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-card-description',
  templateUrl: 'movie-card-description.html'
})
export class MovieCardDescriptionComponent {
  @Input() item: Movie;
  value: Movie;
  text: string;

  constructor() {
    console.log('Hello MovieCardDescriptionComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    console.log('this.item:: ', this.item);
    this.value = this.item;
  }

}
