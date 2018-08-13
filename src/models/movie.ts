export class Movie {
    id: number;
    title: string;
    rating: number;
    genres: string[];
    description: string;
    coverImage:string;

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.title = data.title;
            this.description = data.description_full;
            this.coverImage = data.medium_cover_image;
        }
    }
}