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
    queryWording:string='';

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
        if (moviesData != undefined) {
            moviesData.forEach(responseMovie => moviesToReturn.push(new Movie(responseMovie)));
        }
        return moviesToReturn;
    }

    saveToFavorite(movie: Movie) {
        return this.dbHandler.save(movie).then().catch(err => console.log(err + "HERE"));
    }

    getFavoriteMovies(): Promise < Movie[] > {
        return new Promise((resolve, reject) => {
            this.dbHandler.fetch(Movie).then(data => {
                let movies = [];
                data.forEach(d => movies.push(new Movie(d)));
                resolve(movies);
            }).catch(err => reject(err));
        });
    }

    isMovieFavorite(movie: Movie): Promise < boolean > {
        return new Promise((resolve, reject) => {
            this.dbHandler.fetch(Movie).then(movies => {
                resolve(movies.filter(m => m.id == movie.id).length > 0);
            }).catch(err => resolve(false));
        });
    }

    searchMovie(queryWord: string, genre: string, rating: string, sorting: string,page:number): Observable < Movie[] > {
        this.queryWording=queryWord;
        let searchUrl: string = this.movieUrlByLatest + "?query_term=" + queryWord;
        genre == null || genre == '' ? null : searchUrl += '&gender=' + genre;
        rating == null || rating == '' ? null : searchUrl += '&minimum_rating=' + rating;
        sorting == null || sorting == '' ? null : searchUrl += '&sort_by=' + sorting;
        page == null? null:searchUrl+='&page='+page;
        return new Observable(observer => {
            this.http.get(searchUrl).subscribe((response: any) => {
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

    public getMockMovies(): Observable < Movie[] > {
        return new Observable(observer => {
            this.http.get('assets/data/movies.json').subscribe((response: any) => {
                if (!response.data)
                    return observer.error();
                observer.next(this.serializeMovies(response));
            }, error => observer.error(error));

        });
    }

    removeFromFavorites(movie:Movie){
        return this.dbHandler.remove(movie).then().catch(err => console.log(err + "HERE"));
    }
}