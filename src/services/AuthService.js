// src/services/AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:2319/api'; // Adjust the port if different

const login = (email, password,setIsAuthenticated) => {
  return axios.post(`${API_URL}/login`, { email, password })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
        setIsAuthenticated(true); 
        return response.data; // The token is now stored in localStorage
      } else {
        setIsAuthenticated(false); 
        
        throw new Error('Login failed, no access token received');
      }
    });
}
const logout = (setIsAuthenticated) => {
  localStorage.removeItem('user');
  setIsAuthenticated(false); 
};

const register = (firstName, lastName, email, password) => {
  return axios.post(`${API_URL}/signup`, {
    firstName,
    lastName,
    email,
    password,
  })
  .catch((error) => {
    // Throw the error to be caught by the caller
    throw error;
  });
};
const isAuthenticated = () => {
  // Check if the 'user' item exists in localStorage
  const user = localStorage.getItem('user');
  return !!localStorage.getItem('user'); // The double exclamation converts the value to a boolean
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};


export default {
  login,
  logout,
  register,
  isAuthenticated,
  getCurrentUser,
  
};
