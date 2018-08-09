import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public movies = [];

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