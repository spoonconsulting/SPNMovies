import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MoviePage } from '../pages/movie/movie';
import { MoviesProvider } from '../providers/movies/movies';

import { MovieCardComponent } from '../components/movie-card/movie-card';
import { MovieCardDetailComponent } from '../components/movie-card-detail/movie-card-detail';
import { MovieCardDescriptionComponent } from '../components/movie-card-description/movie-card-description';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MoviePage,
    MovieCardComponent,
    MovieCardDetailComponent,
    MovieCardDescriptionComponent 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MoviePage,
    MovieCardComponent,
    MovieCardDetailComponent,
    MovieCardDescriptionComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesProvider
  ]
})
export class AppModule {}
