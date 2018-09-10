import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../providers/movie-service';
import { NavController } from 'ionic-angular';
import { SearchResult } from '../search-result/search-result';

@Component({
    selector: 'page-search',
    templateUrl: 'search.html',
})

export class SearchPage {

    movies: Movie[];
    isLoading: boolean = false;

    constructor(public movieService: MovieService, public navController: NavController) {}

    searchMovies(queryWord: string, genre: string, rating: string, sorting: string) {
        this.isLoading = true;
        if (!(queryWord == null || queryWord == '') ||
            !(genre == null || genre == '') ||
            !(rating == null || rating == '') ||
            !(sorting == null || sorting == '')) {
            this.movies = [];
            this.movieService.searchMovie(queryWord, genre, rating, sorting,1).subscribe(
                (moviesList: Movie[]) => {
                    this.isLoading = false;
                    this.movies = moviesList
                    this.navController.push(SearchResult, { 'movies': this.movies,
                                                            'query':queryWord,
                                                            'genre':genre,
                                                            'rating':rating,
                                                            'sorting':sorting
                                                          });
                });
        } else {
            this.isLoading = false;
            this.movies = [];
            this.navController.push(SearchResult, { 'movies': this.movies });
        }
    }

}