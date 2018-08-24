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

    searchMovies(queryWord: string) {
        this.isLoading = true;
        if (!(queryWord == null || queryWord == '')) {
            this.movies = [];
            this.movieService.searchMovie(queryWord).subscribe(
                (moviesList: Movie[]) => { 
                    this.isLoading = false;
                    this.movies = moviesList
                    this.navController.push(SearchResult, { 'movies': this.movies });});
        } else {
            this.isLoading=false;
            this.movies = [];
            this.navController.push(SearchResult, { 'movies': this.movies });
        }     
    }
}