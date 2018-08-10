
export class Movie{
    id: String;
    url: String;
    title: String;

    constructor(obj: any){
        this.id = obj.id;
        this.url = obj.url;
        this.title = obj.title;
    }
}