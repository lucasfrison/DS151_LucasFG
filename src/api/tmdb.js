import axios from "axios";

const apiKey = "696f00ef52d5c018662cfc5296bfec01";
const baseURL = "https://api.themoviedb.org/3/search/movie";

export const fetchMovie = async (movieTitle) => {
    const response = await axios.get(
        baseURL,
        {
          params: {
            api_key: apiKey,
            query: movieTitle,
          },
        }
    );
    return (response.data.results[0]);
}

