import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import { Movie } from '../../providers/movies/model';

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
@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild('d1') d1:ElementRef;
  movieItem: Movie;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public elementRef: ElementRef) {
    this.movieItem = navParams.get('movieParam');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePage');
    console.log('this.movieItem:: ', this.movieItem);
    this.navBar.backButtonClick = (e:UIEvent)=>{
      // todo something
      this.navCtrl.pop();
     }

     this.styleHeader();
  }

  styleHeader(){
    this.d1.nativeElement.style.setProperty('background-image','url('+this.movieItem.cover+')');
    this.d1.nativeElement.style.setProperty('background-size','cover');
    this.d1.nativeElement.style.setProperty('background-position','center center');
    this.d1.nativeElement.style.setProperty('background-repeat','no-repeat');
    this.d1.nativeElement.style.setProperty('height', '30%');
    this.d1.nativeElement.style.setProperty('color', '#fff !important');
  }

  searchToggle(){
    console.log('search');
  }

}
