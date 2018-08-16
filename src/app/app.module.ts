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

import { ErrorCardComponent } from '../components/error-card/error-card';
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
    MovieCardDescriptionComponent,
    ErrorCardComponent 
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
    MovieCardDescriptionComponent,
    ErrorCardComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesProvider
  ]
})
export class AppModule {}
