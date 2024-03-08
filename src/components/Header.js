import React, { useState } from 'react';
import { FaUserAlt, FaBars, FaHome } from 'react-icons/fa';
import { IoMdFilm } from 'react-icons/io';
import { MdLiveTv } from 'react-icons/md';
import LoginModal from './LoginModal'; 
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-black text-white flex justify-between items-center p-4 sticky top-0 z-50">
      <div className="flex items-center">
        <FaBars className="text-2xl cursor-pointer mr-4 md:hidden" onClick={() => setIsNavOpen(!isNavOpen)} />
        <nav className={`${isNavOpen ? 'flex' : 'hidden'} absolute flex-col bg-black w-full p-4 top-full left-0 md:static md:flex md:flex-row md:items-center md:w-auto md:p-0 md:top-auto md:left-auto md:bg-transparent overflow-auto max-h-60 md:max-h-full`}>
          <Link to="/moviestvlisting" className="flex items-center gap-2 hover:text-blue-500 mb-2 md:mb-0 md:mr-4">
            <IoMdFilm className="text-2xl" />
            <span className="font-bold text-2xl">Movies</span>
          </Link>
          <Link to="/moviestvlisting" className="flex items-center gap-2 hover:text-blue-500 mb-2 md:mb-0 md:mr-4">
            <MdLiveTv className="text-2xl" />
            <span className="font-bold text-2xl">TV Shows</span>
          </Link>
        </nav>
      </div>
      {/* Title Container */}
      <div className="flex-grow flex justify-center">
        <h1 className="text-xl md:text-2xl font-bold">Two Watch</h1>
      </div>
      <div className="flex items-center">
        <Link to="/" className="text-2xl hover:text-blue-500 ml-4 cursor-pointer">
          <FaHome />
        </Link>
        <FaUserAlt className="text-2xl hover:text-blue-500 ml-4 cursor-pointer" onClick={openModal} />
        {isModalOpen && <LoginModal closeModal={closeModal} />} 
      </div>
    </header>
  );
};

export default Header;
