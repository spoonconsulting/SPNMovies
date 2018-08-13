import { Component, Input } from '@angular/core';
import { Movie } from '../../providers/movies/model';

/**
 * Generated class for the MovieCardDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-card-detail',
  templateUrl: 'movie-card-detail.html'
})
export class MovieCardDetailComponent {
  @Input() item: Movie;
  value: Movie;

  constructor() {
    console.log('Hello MovieCardDetailComponent Component');
  }

  ngOnInit() {
    console.log('this.item:: ', this.item);
    this.value = this.item;
  }

}
