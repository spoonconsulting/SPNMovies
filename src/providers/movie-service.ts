import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {
    movieUrlByLatest = "https://yts.am/api/v2/list_movies.json";
    movieUrlByRating = "https://yts.am/api/v2/list_movies.json?sort_by=rating";
    movieUrl: string;

    constructor(public http: HttpClient) {}

    getMovies(orderByRating: boolean): Observable < Movie[] > {
        this.movieUrl =orderByRating?this.movieUrlByRating: this.movieUrlByLatest;
        return new Observable(observer => {
            this.http.get(this.movieUrl).subscribe((response: any) => {
                console.log("response json: ", response);
                let moviesData = response.data.movies;
                if (!moviesData)
                    return observer.error();
                let moviesToReturn = [];
                moviesData.forEach(responseMovie => moviesToReturn.push(new Movie(responseMovie)));
                observer.next(moviesToReturn);
            }, error=> observer.error(error));

        });
    }

}