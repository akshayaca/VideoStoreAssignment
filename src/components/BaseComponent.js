// BaseComponent.js

import React from 'react';
import Hero from './Hero'; 
import FeaturedMoviesAndTVShows from './FeaturedMoviesAndTv';
import ContentSection from './ContentSection'; // Import the ContentSection component

const BaseComponent = () => {
  return (
    <div className="bg-custom-black"> 
      <Hero/>
      <FeaturedMoviesAndTVShows />
      <ContentSection /> {/* Include the ContentSection component */}
    </div>
  );
};

export default BaseComponent;
