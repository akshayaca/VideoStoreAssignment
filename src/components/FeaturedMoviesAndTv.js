import React, { useState, useEffect, useRef } from 'react';

const FeaturedMoviesAndTVShows = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const [featuredTVShows, setFeaturedTVShows] = useState([]);
    const [error, setError] = useState(null);
    const moviesContainerRef = useRef(null);
    const showsContainerRef = useRef(null);

    useEffect(() => {
        // Fetch featured movies
        fetch('/featuredMovies') // Assuming the server is set up to proxy requests to localhost:3001 in development
            .then(response => response.json())
            .then(data => setFeaturedMovies(data))
            .catch(error => setError(error));

        // Fetch featured TV shows
        fetch('/featuredTVShows') // Assuming the server is set up to proxy requests to localhost:3001 in development
            .then(response => response.json())
            .then(data => setFeaturedTVShows(data))
            .catch(error => setError(error));
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="bg-black p-6">
            <h2 className="text-white text-2xl font-bold mb-4">Featured Movies</h2>
            <div ref={moviesContainerRef} className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto hide-scrollbar">
                {featuredMovies.map(movie => (
                    <div key={movie.id} className="bg-black border border-black mx-1 my-1 flex flex-col items-center shadow-neon-blue cursor-pointer card " style={{ minWidth: '250px', maxWidth: '250px' }}>
                        <img src={movie.poster} alt={movie.title} className="w-full h-full" />
                        <p className="text-white font-semibold text-center p-2">{movie.title}</p>
                    </div>
                ))}
            </div>

            <h2 className="text-white text-2xl font-bold mt-8 mb-4">Featured TV Shows</h2>
            <div ref={showsContainerRef} className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto hide-scrollbar">
                {featuredTVShows.map(show => (
                    <div key={show.id} className="bg-black border border-black mx-1 my-1 flex flex-col items-center shadow-neon-blue cursor-pointer card " style={{ minWidth: '250px', maxWidth: '250px' }}>
                        <img src={show.poster} alt={show.title} className="w-full h-full object-cover" />
                        <p className="text-white font-semibold text-center p-2">{show.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedMoviesAndTVShows;
