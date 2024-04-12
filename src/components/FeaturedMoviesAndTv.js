	
import React, { useState, useEffect, useRef } from 'react';
import FeaturedService from '../services/FeaturedService'; 

const FeaturedMoviesAndTVShows = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const [featuredTVShows, setFeaturedTVShows] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [selectedShowId, setSelectedShowId] = useState(null);
    const [error, setError] = useState(null);
    const moviesContainerRef = useRef(null);
    const showsContainerRef = useRef(null);

    useEffect(() => {
        FeaturedService.getFeaturedMovies()
        .then(movies => {
            setFeaturedMovies(movies);
        })
        .catch(error => setError(error));

    FeaturedService.getFeaturedTvShows()
        .then(shows => {
            setFeaturedTVShows(shows);
        })
        .catch(error => setError(error));
        const handleClickOutside = (event) => {
            if (moviesContainerRef.current && !moviesContainerRef.current.contains(event.target)) {
                setSelectedMovieId(null);
            }

            if (showsContainerRef.current && !showsContainerRef.current.contains(event.target)) {
                setSelectedShowId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleMovieClick = (id) => {
        setSelectedMovieId(selectedMovieId === id ? null : id);
    };

    const handleShowClick = (id) => {
        setSelectedShowId(selectedShowId === id ? null : id);
    };

    return (
        <div className="bg-black p-6">
            <h2 className="text-white text-2xl font-bold mb-4">Featured Movies</h2>
            <div ref={moviesContainerRef} className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto hide-scrollbar">
                {featuredMovies.map(movie => (
                    <div key={movie.id} className="bg-black border border-black mx-1 my-1 flex flex-col items-center shadow-neon-blue cursor-pointer card " style={{ minWidth: '250px', maxWidth: '250px' }} onClick={() => handleMovieClick(movie.id)}>
                        {selectedMovieId === movie.id ? (
                            <p className="text-white p-2">{movie.description}</p>
                        ) : (
                            <>
                                <img src={`${process.env.PUBLIC_URL}/${movie.poster}`} alt={movie.title} className="w-full h-full" />
                                <p className="text-white font-semibold text-center p-2">{movie.title}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>

            <h2 className="text-white text-2xl font-bold mt-8 mb-4">Featured TV Shows</h2>
            <div ref={showsContainerRef} className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto hide-scrollbar">
                {featuredTVShows.map(show => (
                    <div key={show.id} className="bg-black border border-black mx-1 my-1 flex flex-col items-center shadow-neon-blue cursor-pointer card " style={{ minWidth: '250px', maxWidth: '250px' }} onClick={() => handleShowClick(show.id)}>
                        {selectedShowId === show.id ? (
                            <p className="text-white p-2">{show.description}</p>
                        ) : (
                            <>
                                <img src={`${process.env.PUBLIC_URL}/${show.poster}`} alt={show.title} className="w-full h-full object-cover" />
                                <p className="text-white font-semibold text-center p-2">{show.title}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedMoviesAndTVShows;
