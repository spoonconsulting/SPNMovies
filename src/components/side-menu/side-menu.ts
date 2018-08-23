import { Component } from '@angular/core';
import { SearchPage } from '../../pages/search/search';
import {  NavController } from 'ionic-angular';

@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenu {
  constructor(public navCtrl: NavController) {}

  onItemTapped(page: string){
    switch(page){
      case "search":
        this.navCtrl.push(SearchPage);
        break;
      case "settings":
        console.log("Go to Settings");
        break;
    }
  }
}
