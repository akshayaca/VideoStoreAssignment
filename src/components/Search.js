import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-results?query=${searchQuery}`);
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div ref={modalRef} className="bg-white p-4 rounded-lg shadow-lg w-3/4 max-w-lg">
        <h2 className="text-lg mb-4 text-black">What to watch?</h2>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            placeholder="Enter movie or TV show name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 flex-grow border rounded mr-2 text-black"
            style={{ width: 'calc(100% - 40px)' }}
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
