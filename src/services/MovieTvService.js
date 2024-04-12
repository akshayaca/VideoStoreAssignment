import axios from 'axios';

const API_BASE_URL = 'http://localhost:2319/api/movieAndTV'; 
const getAllMovieAndTVs = () => {
  return axios.get(`${API_BASE_URL}/all`)
    .then(response => {
      
      return response.data.map(item => ({
        id: item.id,
        title: item.title,
        type: item.type,
        synopsis: item.synopsis,
        smallPoster: item.smallPoster, 
        largePoster: item.largePoster,
        rentPrice: item.rentPrice,
        purchasePrice: item.purchasePrice,
      }));
    })
    .catch(error => {
      throw error;
    });
};
const getMovieOrTvByIdAndType = (id, type) => {
    return axios.get(`${API_BASE_URL}/${id}/${type}`)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };
  const searchMoviesByTitle = (title) => {
    return axios.get(`${API_BASE_URL}/search`, { params: { title } })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };
  const getAllTvShows = () => {
    return axios.get(`${API_BASE_URL}/type/tv`) // Updated to fetch only tv type
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };
  const getAllMovies = () => {
    return axios.get(`${API_BASE_URL}/type/movie`) // Updated to fetch only tv type
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };
  

export default {
  getAllMovieAndTVs,
  getMovieOrTvByIdAndType,
  searchMoviesByTitle,
  getAllTvShows,
  getAllMovies,
};
