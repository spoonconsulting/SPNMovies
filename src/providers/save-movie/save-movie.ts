import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Movie, ErrorLog, ErrorMessage } from '../movies/model';
import { resolveDefinition } from '../../../node_modules/@angular/core/src/view/util';

/*
  Generated class for the SaveMovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SaveMovieProvider {
  queryInsert = 'INSERT INTO favoriteMovie VALUES (?,?,?,?,?,?,?,?,?)';
  querySelectAll = "SELECT * FROM favoriteMovie";
  querySelectById = 'SELECT * FROM favoriteMovie WHERE id=';
  dbName = 'movies.db';
  dbLocation = 'default';

  constructor(private sqlite: SQLite) {
    new ErrorLog('SaveMovieProvider','Hello SaveMovieProvider Provider', true);
  }

  /*
    id: number;
    url: String;
    title: String;
    cover: String;
    description: String;
    genre: String;
    rating: number;
    mpa_rating: String;
    duree: number;*/
  createFavoriteTable(){
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: this.dbName,
        location: this.dbLocation
      }).then((db: SQLiteObject) => {
        let query = 'CREATE TABLE IF NOT EXISTS favoriteMovie(id INTEGER PRIMARY KEY, url TEXT, title TEXT, cover TEXT, description TEXT, genre TEXT, rating INT, mpa_rating TEXT, duree INT)';
        db.executeSql(query).then((response) => {
          resolve('table create');
        }).catch( e =>{
          reject(e);
        })
      }).catch(e =>{
        reject(e);
      })
    });
  }

  /*
    id: String;
    url: String;
    title: String;
    cover: String;
    description: String;
    genre: String;
    rating: number;
    mpa_rating: String;
    duree: number;*/
  saveToFavoriteTable(e: Movie){
    new ErrorLog('saveToFavoriteTable', e, true);
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: this.dbName,
        location: this.dbLocation
      }).then((db: SQLiteObject) => {
          db.executeSql(this.queryInsert, [e.id, e.url, e.title, e.cover, e.description, e.genre, e.rating, e.mpa_rating, e.duree]).then(response => {
            new ErrorLog('saveToFavoriteTable', response, true);
            resolve('success')
          }).catch(error => {
            new ErrorLog('saveToFavoriteTable', error, true);
            reject(error);
          });
      })
    });
  }

  getFavorite(): Promise<Movie[]>{
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: this.dbName,
        location: this.dbLocation
      }).then((db: SQLiteObject) => {
          db.executeSql(this.querySelectAll, []).then(res => {
            let movies: Movie[] = [];
            for(var i=0; i< res.rows.length; i++) {
              movies.push( new Movie(res.rows.item(i).id, res.rows.item(i).url, res.rows.item(i).title, res.rows.item(i).cover, res.rows.item(i).description, res.rows.item(i).genre, res.rows.item(i).rating, res.rows.item(i).duree, res.rows.item(i).mpa_rating));
            }
            resolve(movies);
          }).catch(error => {
            new ErrorLog('saveToFavoriteTable - error', error, true);
            reject(new ErrorMessage(error));
          });
      })
    });
  }

  isInsideFavorite(e: Movie): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.sqlite.create({
        name: this.dbName,
        location: this.dbLocation
      }).then((db: SQLiteObject) => {
          db.executeSql(this.querySelectById + e.id, []).then(res => {
            if(res.rows.length > 0){
              resolve(true);
            }else{
              resolve(false);
            }
          }).catch(error => {
            new ErrorLog('saveToFavoriteTable - error', error, true);
            reject(new ErrorMessage(error));
          });
      })
    });
  }

}
