export class Movie {
    id: number;
    title: string;
    rating: number;
    genres: string[];
    description: string;

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.title = data.title;
            this.description = data.description_full;
        }
    }
}