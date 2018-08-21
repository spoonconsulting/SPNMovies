import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Movie } from '../models/movie';
import { DatabaseService } from '../providers/database-service'

@Injectable()
export class MovieService {
    movieUrlByLatest = "https://yts.am/api/v2/list_movies.json";
    movieUrlByRating = "https://yts.am/api/v2/list_movies.json?sort_by=rating";
    movieUrl: string;

    constructor(public http: HttpClient, public dbHandler: DatabaseService) {}

    getMovies(orderByRating: boolean): Observable < Movie[] > {
        this.movieUrl = orderByRating ? this.movieUrlByRating : this.movieUrlByLatest;
        return new Observable(observer => {
            this.http.get(this.movieUrl).subscribe((response: any) => {
                if (!response.data)
                    return observer.error();
                observer.next(this.serializeMovies(response));
            }, error => {
                //  this.getMockMovies().subscribe(mockMovies=>{
                //     observer.next(mockMovies);
                //  },
                err => error(err);

            })

        });
    }

    private serializeMovies(response: any): Movie[] {
        let moviesData = response.data.movies;
        let moviesToReturn = [];
        moviesData.forEach(responseMovie => moviesToReturn.push(new Movie(responseMovie)));
        return moviesToReturn;
    }

    saveToFavorite (movie: Movie) {
       return this.dbHandler.save(movie);
    }

    getFavoriteMovies() {
        this.dbHandler.fetch(Movie);
    }

    
    // public getMockMovies(): Observable < Movie[] > {
    //     return new Observable(observer => {
    //         this.http.get('assets/data/movies.json').subscribe((response: any) => {
    //             if (!response.data)
    //                 return observer.error();
    //             observer.next(this.serializeMovies(response));
    //         }, error => observer.error(error));

    //     });
    // }

}