import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../providers/movies/model';

/**
 * Generated class for the MovieCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-card',
  templateUrl: 'movie-card.html'
})
export class MovieCardComponent {

  @Input() title: string;
  @Input() item: Movie;
  text: string = 'Hello World';
  value: Movie;

  constructor() {
    console.log('Hello MovieCardComponent Component');
    // this.text = 'Hello World';
    // this.text = this.title;
    // console.log(this.title);
  }

  ngOnInit() {
    this.value = this.item;
  }

}
