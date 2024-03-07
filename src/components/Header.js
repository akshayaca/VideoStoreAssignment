import React, { useState } from 'react';
import { FaSearch, FaUserAlt, FaBars } from 'react-icons/fa';
import { IoMdFilm } from 'react-icons/io';
import { MdLiveTv, MdSportsSoccer } from 'react-icons/md';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-black text-white flex justify-between items-center p-4 sticky top-0 z-50">
      <div className="flex items-center">
        <FaBars className="text-xl cursor-pointer mr-4 md:hidden" onClick={() => setIsNavOpen(!isNavOpen)} />
        <nav className={`${isNavOpen ? 'flex' : 'hidden'} absolute flex-col bg-black w-full p-4 top-full left-0 md:static md:flex md:flex-row md:items-center md:w-auto md:p-0 md:top-auto md:left-auto md:bg-transparent overflow-auto max-h-60 md:max-h-full`}>
          <a href="#movies" className="flex items-center gap-2 hover:text-blue-500 mb-2 md:mb-0 md:mr-4">
            <IoMdFilm className="text-xl" />
            <span>Movies</span>
          </a>
          <a href="#tv-shows" className="flex items-center gap-2 hover:text-blue-500 mb-2 md:mb-0 md:mr-4">
            <MdLiveTv className="text-xl" />
            <span>TV Shows</span>
          </a>
          <a href="#sports" className="flex items-center gap-2 hover:text-blue-500 mb-2 md:mb-0 md:mr-4">
            <MdSportsSoccer className="text-xl" />
            <span>Sports</span>
          </a>
          <a href="#live-tv" className="flex items-center gap-2 hover:text-blue-500 mb-2 md:mb-0">
            <MdLiveTv className="text-xl" />
            <span>Live TV</span>
          </a>
        </nav>
      </div>
      <div className="flex items-center">
        <input type="text" placeholder="Search" className="bg-transparent border-b border-gray-500 text-white placeholder-blue-500 focus:ring-0 focus:border-white md:mr-4" />
        <FaSearch className="text-xl hover:text-blue-500 ml-2 md:ml-4" />
        <FaUserAlt className="text-xl hover:text-blue-500 ml-4" />
      </div>
    </header>
  );
};

export default Header;
