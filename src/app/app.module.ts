import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import * as c from './';
import { SQLite } from '../../node_modules/@ionic-native/sqlite';

@NgModule({
  declarations: [
    c.MyApp,
    c.HomePage,
    c.MoviePage,
    c.MovieCardComponent,
    c.MovieCardDetailComponent,
    c.MovieCardDescriptionComponent,
    c.ErrorCardComponent 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(c.MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    c.MyApp,
    c.HomePage,
    c.MoviePage,
    c.MovieCardComponent,
    c.MovieCardDetailComponent,
    c.MovieCardDescriptionComponent,
    c.ErrorCardComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    c.MoviesProvider,
    SQLite,
    c.SaveMovieProvider
  ]
})
export class AppModule {}
