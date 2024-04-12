import React from 'react';
import Hero from './Hero'; 
import FeaturedMoviesAndTVShows from './FeaturedMoviesAndTv';
import ContentSection from './ContentSection'; 
import { useAuth } from '../contexts/AuthContext';


const BaseComponent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-custom-black"> 
      <Hero/>
      <FeaturedMoviesAndTVShows />
      <ContentSection />
      
    </div>
  );
};

export default BaseComponent;
