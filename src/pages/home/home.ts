import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public movProv: MoviesProvider) {
    
    this.movProv.getMovies().then((movies) =>{
      console.log('movies:: ', movies );
    })
  }

}
