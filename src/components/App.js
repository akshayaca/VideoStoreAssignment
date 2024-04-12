import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed HashRouter import
import LoginModal from './LoginModal';
import Header from './Header';
import BaseComponent from './BaseComponent';
import MovieAndTVShowListing from './MovieAndTVShowListing';
import DetailsPage from './DetailsPage';
import AllMovie from './AllMovie'; // Adjust path as necessary
import SearchResults from './SearchResults';

import Footer from './Footer';
import '../css/App.css';
import AllTv from './AllTv';

const App = () => {
  return (
  
    <div className="App min-h-screen flex flex-col">
      <Header />
      <main className="bg-black flex-grow">
      
        <Routes>
        <Route path="/login" element={<LoginModal />} />
          <Route path="/" element={<BaseComponent />} exact />
          <Route path="/moviestvlisting" element={<MovieAndTVShowListing />} />
          <Route path="/:id/:type" element={<DetailsPage />} />
          <Route path="/movie" element={<AllMovie />} /> 
          <Route path="/tv" element={<AllTv />} /> 
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
       
      </main>
      <Footer />
    </div>
   
  );
};

export default App;
