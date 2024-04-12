import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import MovieAndTVService from '../services/MovieTvService'; 
import { useAuth } from '../contexts/AuthContext';

const DetailsPage = () => {
    const { id, type } = useParams();
    const location = useLocation();
    const { isAuthenticated } = useAuth(); // Destructure to use only what's needed
 
    const [details, setDetails] = useState(location.state ? location.state.details : null);
    const [loading, setLoading] = useState(!details);
    const [error, setError] = useState('');

    useEffect(() => {
        if (id) {
            setLoading(true);
            MovieAndTVService.getMovieOrTvByIdAndType(id, type)
                .then(data => {
                    setDetails(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError('Failed to fetch data');
                    setLoading(false);
                });
        }
    }, [id, type]);

    const handleAction = (action) => {
        if (isAuthenticated) {
            alert(`Item added: ${action}`);
        } else {
            alert("You must log in to perform this action.");
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!details) return null;

    return (
        <div className="flex flex-col lg:flex-row bg-black min-h-screen lg:space-x-8">
            <div className="lg:flex-1 flex justify-center items-center p-4 lg:pl-8 lg:pr-4">
                <img src={`${process.env.PUBLIC_URL}/${details.smallPoster}`} alt={`${details.title} Poster`} className="rounded-lg shadow-lg mb-4 lg:mb-0 w-full h-auto max-w-md" />
            </div>
            <div className="lg:flex-1 flex flex-col justify-center items-center p-4 lg:p-8">
                <div className="max-w-lg w-full space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">{details.title}</h2>
                    <h3 className="text-xl font-bold text-white">Synopsis</h3>
                    <p className="text-white">{details.synopsis}</p>
                    <div className="flex justify-center gap-4">
                        <button 
                        onClick={() => handleAction(`Rent ${details.rentPrice}`)}
                        disabled={!isAuthenticated}
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${!isAuthenticated ? "opacity-50 cursor-not-allowed" : ""}`}>
                            Rent ${details.rentPrice}
                        </button>
                        <button 
                        onClick={() => handleAction(`Buy ${details.purchasePrice}`)}
                        disabled={!isAuthenticated}
                        className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${!isAuthenticated ? "opacity-50 cursor-not-allowed" : ""}`}>
                            Buy ${details.purchasePrice}
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:flex-1 relative">
                <img src={`${process.env.PUBLIC_URL}/${details.largePoster}`} alt={`${details.title} Poster`} className="w-full h-full object-cover rounded-none lg:rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black lg:bg-gradient-to-r lg:from-black lg:to-transparent"></div>
            </div>
        </div>
    );
};

export default DetailsPage;
