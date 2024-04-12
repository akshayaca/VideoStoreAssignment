import axios from 'axios';

const API_BASE_URL = 'http://localhost:2319/api'; 
const getFeaturedMovies = () => {
  return axios.get(`${API_BASE_URL}/fdmovies/allfdmovies`)
    .then(response => {
     
      return response.data.map(movie => ({
        id: movie.id,
        title: movie.title,
        description: movie.description,
        poster: movie.poster, 
      }));
    })
    .catch(error => {
      throw error;
    });
};

const getFeaturedTvShows = () => {
  return axios.get(`${API_BASE_URL}/fdtv/allftv`)
    .then(response => {
    
      return response.data.map(show => ({
        id: show.id,
        title: show.title,
        description: show.description,
        poster: show.poster, 
      }));
    })
    .catch(error => {
      throw error;
    });
};

export default {
  getFeaturedMovies,
  getFeaturedTvShows,
};
