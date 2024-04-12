// src/services/AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:2319/api'; 

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
   
    throw error;
  });
};
const isAuthenticated = () => {
  
  const user = localStorage.getItem('user');
  return !!localStorage.getItem('user'); 
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
