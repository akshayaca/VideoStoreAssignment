import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const DetailsPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const [details, setDetails] = useState(location.state ? location.state.details : null);
    const [loading, setLoading] = useState(!details);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!details) {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const response = await fetch(`http://localhost:3001/collection/${id}`);
                    const data = await response.json();
                    setDetails(data);
                } catch (error) {
                    setError('Failed to fetch data');
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [id, details]);

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
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Rent ${details.rentPrice}
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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
}

export default DetailsPage;
