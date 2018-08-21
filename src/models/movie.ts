import { Serializable } from '../providers/database-service'

export class Movie implements Serializable {
    id: number;
    title: string;
    rating: number;
    genres: string;
    description: string;
    coverImage: string;
    duration: string;
    backgroundImage: string;
    mpaRating: string;

    constructor(data ? : any) {
        if (data) {
            this.id = data.id;
            this.title = data.title;
            this.description = data.description || data.description_full;
            this.coverImage = data.coverImage || data.medium_cover_image;
            this.backgroundImage = data.backgroundImage || data.background_image_original;
            this.rating = data.rating;
            this.duration = data.runtime;
            this.mpaRating = data.mpaRating || data.mpa_rating;
            this.genres = (typeof data.genres === typeof []) ? data.genres.join(",") : data.genres;
        }
    }

    serialize() {
        let serializedArray = [];
        Object.keys(this).forEach(key => {
            serializedArray.push({
                attribute: key,
                value: this[key]
            })
        })
        return serializedArray;
    }

    deserialize() {

    }
}