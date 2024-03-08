import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const DetailsPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const [details, setDetails] = useState(location.state ? location.state.item : null);
    const [loading, setLoading] = useState(!details);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!details) {
            // Fallback to fetch data if `details` is not provided through state
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

    if (!details) return null; // Return null if details are not available

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    console.log(details.smallPoster, details.largePoster);

    return (
        <div className="container mx-auto p-4 text-white">
            <div className="flex flex-col md:flex-row">
                <div className="md:flex-1">
                    <div className="mb-4">
                        <img src={details.smallPoster} alt={`${details.title} Small Poster`} className="w-full h-auto" />
                    </div>
                    <div>
                        <img src={details.largePoster} alt={`${details.title} Large Poster`} className="w-full h-auto" />
                    </div>
                </div>
                <div className="md:flex-1 md:ml-4">
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold">{details.title} ({details.type.toUpperCase()})</h2>
                    </div>
                    <div>
                        <h3 className="text-xl mb-2">Synopsis</h3>
                        <p className="mb-4">{details.synopsis}</p>
                    </div>
                    <div>
                        <p className="mb-2"><strong>Rent Price:</strong> ${details.rentPrice}</p>
                        <p><strong>Purchase Price:</strong> ${details.purchasePrice}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
