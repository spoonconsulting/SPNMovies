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
export class Movie{
    id: String;
    url: String;
    title: String;
    cover: String;
    description: String;
    genre: String;
    rating: number;
    mpa_rating: String;
    duree: number;

    constructor(obj: any){
        this.id = obj.id;
        this.url = obj.url;
        this.title = obj.title_long;
        this.cover = obj.medium_cover_image;
        this.description = obj.summary;
        var genres = obj.genres;
        if(genres != undefined) this.genre = genres.toString();
        this.rating = obj.rating;
        this.duree = obj.runtime;
        this.mpa_rating = obj.mpa_rating;
    }
}

export class ErrorMessage{
    message: string;
    status: number;

    constructor(obj: any){
        this.message = obj.message;
        this.status = obj.status;
    }
}