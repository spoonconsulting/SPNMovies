import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {
    movieUrl = "https://yts.am/api/v2/list_movies.json";

    constructor(public http: HttpClient) {}

    getMovies(): Observable < Movie[] > {
        return new Observable(observer => {
            this.http.get(this.movieUrl).subscribe((response:any) => {
                console.log("response json: ", response);
                let moviesData = response.data.movies;
                let moviesToReturn = [];
                moviesData.forEach(responseMovie => {
                    moviesToReturn.push(new Movie(responseMovie));
                });
                observer.next(moviesToReturn);
            });
        });

    }

}