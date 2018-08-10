import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public movies = [];
    title = 'app';
    faStar = faStar;

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
    }

}