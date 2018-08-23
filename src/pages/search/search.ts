import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Movie } from '../../models/movie';
import { MovieService } from '../../providers/movie-service';

@IonicPage()
@Component({
    selector: 'page-search',
    templateUrl: 'search.html',
})

export class SearchPage {

    movies: Movie[];
    public titleInput;
    public isLoading: boolean = false;

    constructor(public movieService: MovieService) {}

    searchMovies(queryWord: string) {
        this.isLoading = true;
        if (!(queryWord == null || queryWord == '')) {
            this.isLoading = true;
            this.movies = [];
            this.movieService.searchMovie(queryWord).subscribe(
                moviesList => {
                    this.isLoading = false;
                    moviesList.forEach(m => this.movies.push(m));
                }
            );
        } else {
            this.isLoading = false;
            this.movies = [];
        }
    }

}