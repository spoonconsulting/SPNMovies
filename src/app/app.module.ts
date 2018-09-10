import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, LoadingController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { MoviesGridComponent } from '../components/movies-grid/movies-grid';
import { HttpClientModule }    from '@angular/common/http';
import { MovieService } from '../providers/movie-service';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';
import { CustomLoading } from '../components/custom-loader/customLoading';
import { DatabaseService } from '../providers/database-service';
import { SQLite } from '@ionic-native/sqlite';
import { SideMenu } from '../components/side-menu/side-menu';
import { SearchPage } from '../pages/search/search';
import { SearchResult } from '../pages/search-result/search-result';
import { MovieListComponent } from '../components/movie-list/movie-list';

library.add(faStar);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MoviesGridComponent,
    MovieDetailPage,
    CustomLoading,
    SideMenu,
    SearchPage,
    SearchResult,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FontAwesomeModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MovieDetailPage,
    CustomLoading,
    SearchPage,
    SearchResult
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieService,
    LoadingController,
    DatabaseService,
    SQLite
  ]
})
export class AppModule {}
