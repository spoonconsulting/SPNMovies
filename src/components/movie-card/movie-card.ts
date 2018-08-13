import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Movie } from '../../providers/movies/model';
import { MoviePage } from '../../pages/movie/movie';
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

  constructor(private navCtrl: NavController) {
    console.log('Hello MovieCardComponent Component');
    // this.text = 'Hello World';
    // this.text = this.title;
    // console.log(this.title);
  }

  ngOnInit() {
    this.value = this.item;
  }

  openDetails(movieParam) {
      console.log('crap');
      this.navCtrl.push(MoviePage,{
        'movieParam': movieParam
      });
  }

}
