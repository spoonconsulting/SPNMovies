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

library.add(faStar);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MoviesGridComponent,
    MovieDetailPage,
    CustomLoading
    SideMenu,
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
    CustomLoading
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
