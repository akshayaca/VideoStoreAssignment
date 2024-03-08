import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import movieImage1 from '../img/Avengers.jpg';
import MovieAndTVShowListing from './MovieAndTVShowListing';

const ContentSection = () => {
    const [watchedTogether] = useState([
        { id: 1, title: 'Avengers', description: 'Description for Avengers' },
        { id: 2, title: 'Breaking Bad', description: 'Description for Breaking Bad' },
        { id: 3, title: 'Game of Thrones', description: 'Description for Game of Thrones' },
        { id: 4, title: 'Inception', description: 'Description for Inception' },
        { id: 5, title: 'Star Wars', description: 'Description for Star Wars' },
        { id: 6, title: 'Stranger Things', description: 'Description for Stranger Things' },
        { id: 7, title: 'The Crown', description: 'Description for The Crown' },
        { id: 8, title: 'The Lion King', description: 'Description for The Lion King' },
        { id: 9, title: 'The Mandalorian', description: 'Description for The Mandalorian' },
        { id: 10, title: 'Toy Story 4', description: 'Description for Toy Story 4' },
    ]);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const containerRef = useRef(null);
    const [showListing] = useState(false); // State to toggle showing the listing

    const handleItemClick = (id) => {
        setSelectedItemId(selectedItemId === id ? null : id);
    };

    // Event listener to reset selected item ID when clicked outside the container
    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setSelectedItemId(null);
        }
    };

    // Add event listener on component mount
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Remove event listener on component unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    return (
        <div className="bg-black p-6" ref={containerRef}>
            <h2 className="text-white text-2xl font-bold mb-4">Movies and TV Shows Watched Together</h2>
            <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto hide-scrollbar">
            {watchedTogether.map(item => (
              <div key={item.id} className="bg-black border border-black mx-1 my-1 flex flex-col items-center shadow-neon-blue card cursor-pointer" style={{ minWidth: '250px', maxWidth: '250px' }} onClick={() => handleItemClick(item.id)}>
                {selectedItemId === item.id ? (
                  <p className="text-white p-2">{item.description}</p>
                ) : (
                  <>
                    <img src={movieImage1} alt={item.title} className="w-full h-full object-cover" />
                    <p className="text-white font-semibold text-center p-2">{item.title}</p>
                  </>
                )}
              </div>
            ))}
          </div>
          
          {watchedTogether.length > 0 && (
            <div className="text-center mt-4">
            <Link to="/moviestvlisting" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View All
          </Link> </div>
          )}

            
            {showListing && <MovieAndTVShowListing />} {/* Render the listing component when showListing is true */}
            <div className="mt-12 bg-dark px-6 md:mx-auto md:w-full lg:max-w-screen-xl lg:mx-0">
                {/* Align "Exclusive Subscription" to the left */}
                <h2 className="text-white text-2xl font-bold mb-2 lg:mb-0 lg:pb-6">Exclusive Subscription</h2> 
                <div className="flex flex-col lg:flex-row justify-between items-start lg:gap-8">
                    <div className="flex-grow bg-black p-0 text-justify">
                        {/* "Ultimate Flexibility Package..." starts here aligned with "Exclusive Subscription" */}
                        <h3 className="text-white text-lg font-bold mb-1">Ultimate Flexibility Package for Busy Couples</h3>
                        <p className="text-white mb-2">Are you and your partner struggling to find time for movie nights amidst your hectic schedules? Say goodbye to rushing through movies and hello to uninterrupted quality time together with our Ultimate Flexibility Package!</p>
                        <p className="text-white">Enjoy unrestricted access to our extensive video library for an extended period each day or week, giving you the flexibility to watch movies whenever it suits you best. Whether it's a quick mid-week pick-me-up or a leisurely weekend binge, the choice is yours!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSection;
