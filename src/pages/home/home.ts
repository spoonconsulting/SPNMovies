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
    //faStar = faStar;

    constructor(public navCtrl: NavController) {
        this.movies = [{
                name: "catMovie",
                posterUrl: "http://thecatapi.com/api/images/get?format=src&type=png&name=est"
            },
            {
                name: "catMovie",
                posterUrl: "http://thecatapi.com/api/images/get?format=src&type=png&name=tst"
            }
        ];
        library.add(faStar);
       // var self= this;
        for(var i of [1,2,3,4,5,6,7,8,9,10]){
            console.log(this.movies);
            var movie = {
                name: `catMovie ${i}`,
                posterUrl:`http://thecatapi.com/api/images/get?format=src&type=png&name=est_${i}`
            };
            
           this.movies.push(movie);  

        }
        
    }

}