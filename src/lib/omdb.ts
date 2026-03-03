import axios from "axios";
import { OMDbRawResponse, MovieData} from "@/types/movie";

export const fetchMovieFromOMDb = async (
    imdbId: string
): Promise<MovieData> => {
    try {
        const response = await axios.get<OMDbRawResponse>(
            "https://www.omdbapi.com/",
            {
                params: {
                    i: imdbId,
                    apikey: process.env.OMDB_API_KEY,
                    plot: "short",
                },
            }
        );

        const data = response.data;

        if(data.Response === "False") {
            throw new Error(data.Error || "Movie not found");
        }

        // Normalise response
        const normalised: MovieData = {
            title: data.Title,
            poster:
                data.Poster !== "N/A"
                ? data.Poster
                : "/fallback-poster.png",
            year: data.Year,
            rating: data.imdbRating,
            plot: data.Plot,
            cast: data.Actors.split(",").map((actor) => actor.trim()),
        };

        return normalised;
    } catch (error: any) {
        if(error.response) {
            throw new Error("OMDb API error");
        }
        throw new Error(error.message || "Unexpected error");
    }
};