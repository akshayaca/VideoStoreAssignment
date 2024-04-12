import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSadTear } from 'react-icons/fa';
import MovieAndTVService from '../services/MovieTvService';

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchResults = () => {
  const query = useQuery();
  const searchQuery = query.get('query');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const results = await MovieAndTVService.searchMoviesByTitle(searchQuery);
        setSearchResults(results);
        setLoading(false);
    } catch (error) {
        
      } finally {
        setLoading(false); 
      }
    };

   if (searchQuery) fetchSearchResults();
  }, [searchQuery]);

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-white text-center">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-white text-2xl font-bold mb-4 text-center">Search Results for "{searchQuery}"</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4"></div>
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4">
          {searchResults.map((item) => (
            <div key={item.id} className="bg-black border border-gray-800 mx-1 my-1 flex flex-col items-center shadow-neon-blue transform group-hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden card">
              <img src={`${process.env.PUBLIC_URL}/${item.smallPoster}`} alt={item.title} className="w-60 h-full object-contain" />
              <p className="text-white font-semibold text-center p-2 truncate">{item.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <FaSadTear className="text-6xl text-white mb-4" />
        <p className="text-white text-2xl text-center">No TV show or movie found 😞</p>
      </div>      )}
    </div>
  );
};

export default SearchResults;