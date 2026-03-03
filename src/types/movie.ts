export interface MovieData {
    title: String;
    poster: String;
    year: String;
    rating: String;
    plot: String;
    cast: String[];
}

export interface OMDbRawResponse {
    Title: string;
    Year: string;
    imdbRating: string;
    Poster: string;
    Plot: string;
    Actors: string;
    Response: string;
    Error?: string;
}