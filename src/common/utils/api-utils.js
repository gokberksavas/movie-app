export  { endpoint, favourites } 
import axios from "axios";
const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = process.env.VUE_APP_MOVIEDB_API_KEY;


const endpoint = {
    getPopular: async (page) => {
        try {
            const response = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`)

            return response.data.results;
        } catch (err) {
            console.error(err);
        }
    }
}

const favourites = {}

favourites.getFavourites = () => {
    return JSON.parse(window.localStorage.getItem('favourites') || '[]');
}

favourites.addToFavourites = function (data) {
    let favourites = this.getFavourites();
    
    favourites.push(data);

    window.localStorage.setItem('favourites', JSON.stringify(favourites));
};

favourites.removeFromFavourites = function (id) {
    let favourites = this.getFavourites();
    let newFavourites = favourites.filter((movie) => {
        return id !== movie.id
    });
    
    window.localStorage.setItem('favourites', JSON.stringify(newFavourites));
};

favourites.isFavourite = function (id) {
    let favourites = this.getFavourites();

    return (favourites.some((movie) => {
        return id === movie.id;
    }));
};