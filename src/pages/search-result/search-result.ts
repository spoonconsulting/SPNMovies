import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Movie } from '../../models/movie';
import { MovieDetailPage } from '../../pages/movie-detail/movie-detail';
import { SearchPage } from '../search/search';
import { MovieService } from '../../providers/movie-service';

@Component({
    selector: 'page-search-result',
    templateUrl: 'search-result.html',
})
export class SearchResult {

    movies: Movie[];
    page:number=1;

    constructor(public navController: NavController, public navParams: NavParams, public movieService: MovieService) {
        this.movies = this.navParams.get('movies');
    }

    private didSelectMovie(movie: Movie) {
        this.navController.push(MovieDetailPage, { "movie": movie });
    }

    doInfinite(): Promise < any > {
        console.log('Begin async operation');
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(this.movieService.queryWording + "#########");
                this.movieService.searchMovie(this.movieService.queryWording,'','','',++this.page)
                .subscribe(movies=> movies.forEach(m=>this.movies.push(m)));
                console.log('Async operation has ended');
                resolve();
            }, 500);
        })
    }
}