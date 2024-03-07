// BaseComponent.js

import React from 'react';
import Hero from './Hero'; 
import FeaturedMoviesAndTVShows from './FeaturedMoviesAndTv';

const BaseComponent = () => {
  return (
    <div className="bg-custom-dark"> 
     <Hero/>
     <FeaturedMoviesAndTVShows />
    </div>
  );
};

export default BaseComponent;
