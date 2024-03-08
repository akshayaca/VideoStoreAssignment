import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieAndTVShowListing = () => {
    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the fake API
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/collection');
                const data = await response.json();
                setCollection(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-white text-2xl font-bold mb-4 text-center">Most Watched Together Movies And TV show Listings</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4">
                {collection.map(item => (
                    <Link to={{ pathname: `/details/${item.id}`, state: { details: item } }} key={item.id} className="group">
                        <div className="bg-black border border-gray-800 mx-1 my-1 flex flex-col items-center shadow-neon-blue transform group-hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden card">
                            <img src={item.smallPoster} alt={item.title} className="w-60 h-full object-contain" />
                            <p className="text-white font-semibold text-center p-2 truncate">{item.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MovieAndTVShowListing;
