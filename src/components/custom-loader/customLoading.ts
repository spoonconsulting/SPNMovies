import { LoadingController, Loading } from 'ionic-angular';
import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
    selector: 'custom-loader',
    template: ''
})

export class CustomLoading implements OnChanges {
    private loadingView: Loading;
    @Input()
    active: boolean = false;

    constructor(public loadingCtrl: LoadingController) {}

    ngOnChanges(changes: SimpleChanges) {
        if (!this.active) {
            this.dismiss();
        } else {
            this.present();
        }
    }

    private present() {
        this.loadingView = this.loadingCtrl.create({
            cssClass: 'activity-detail-loading'
        });
        return this.loadingView.present();
    }

    private dismiss() {
        if(!this.loadingView)
            return;
        return this.loadingView.dismiss();
    }

}