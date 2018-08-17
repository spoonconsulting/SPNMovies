/**
 * @author 	SC (SRA)
 * @version 1.0
 * @since	10/08/2018
 *
 * Describe here what the class do
 * 
 *-- Maintenance History: 
 *--
 *-- Date         Name  Version  Remarks 
 *-- -----------  ----  -------  -------------------------------------------------------
 *-- 10-AUG-2018  SRA    1.0     Initial version
 *--------------------------------------------------------------------------------------
 * 
 */
interface MovieData {
    id: number;
    url: String;
    title_long: String;
    medium_cover_image: String;
    summary: String;
    genres: String[];
    rating: number;
    mpa_rating: String;
    runtime: number;
}

export class Movie{
    id: number;
    url: String;
    title: String;
    cover: String;
    description: String;
    genre: String;
    rating: number;
    mpa_rating: String;
    duree: number;

    // if(genres != undefined) this.genre = genres.toString();

    static fromData(data: MovieData) {
        let { id, url, title_long, medium_cover_image, summary, genres, rating, mpa_rating, runtime } = data 
        return new this(
            id,
            url,
            title_long,
            medium_cover_image,
            summary,
            this.genre(genres),
            rating,
            runtime,
            mpa_rating
        )
    }

    static genre(genres){
        if(genres != undefined) return genres.toString();
        return '';
    }

    constructor(id: number, url: String, title: String, cover: String, description: String, genre: String, rating: number, duree: number, mpa_rating: String){
        this.id = id;
        this.url =  url;
        this.title =  title;
        this.cover = cover;
        this.description = description;
        this.genre = genre;
        this.rating = rating;
        this.duree = duree;
        this.mpa_rating = mpa_rating;
    }
}


interface ErrorData {
    message: string;
    status: number;
}

export class ErrorMessage{
    message: string;
    status: number;

    static fromString(message: string){
        return new this(
            message,
            0
        )
    }

    static fromData(data: ErrorData) {
        let { message, status } = data 
        return new this(
            message,
            status
        )
    }

    constructor(message: string, status: number){
        this.message = message;
        this.status = status;
    }
}

export class Log{
    title: string;
    message: any;
    show: boolean;

    constructor(title: string, message: any, show: boolean){
        this.title = title;
        this.message = message;
        this.show = show;

        if(this.show){
            console.log(this.title + ':: ',this.message);
        }
    }
}