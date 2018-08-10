import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public movies = [];
    public currentTab="latest";

    constructor(public navCtrl: NavController) {
        library.add(faStar);
        for(var i of [1,2,3,4,5,6,7,8,9,10]){
            var movie = {
                name: `catMovie ${i}`,
                posterUrl:`http://thecatapi.com/api/images/get?format=src&type=png&name=est_${i}`
            };
            
           this.movies.push(movie);  

        }
        
    }

}