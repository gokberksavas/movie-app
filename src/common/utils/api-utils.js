import axios from "axios";
const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = process.env.VUE_APP_MOVIEDB_API_KEY;


export const endpoint = {
    getPopular: async (page) => {
        try {
            const response = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`)

            return response.data.results;
        } catch (err) {
            console.error(err);
        }
    }
} 