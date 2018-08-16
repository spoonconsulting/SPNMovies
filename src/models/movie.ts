export class Movie {
    id: number;
    title: string;
    rating: number;
    genres: string[];
    description: string;
    coverImage: string;
    duration: string;
    backgroundImage: string;
    mpaRating:string;

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.title = data.title;
            this.description = data.description_full;
            this.coverImage = data.medium_cover_image;
            this.backgroundImage = data.background_image_original;
            this.rating = data.rating;
            this.duration=data.runtime;
            this.mpaRating=data.mpa_rating;
            this.genres=data.genres;
        }
    }
}