// Header.js
import React from 'react';
import { FaSearch, FaUserAlt } from 'react-icons/fa';
import { IoMdFilm } from 'react-icons/io';
import { MdLiveTv, MdSportsSoccer } from 'react-icons/md';
import '../css/App.css'; 

const Header = () => {
    return (
      <header className="header">
        <div className="header-section left-section">
          <div className="menu-item">
            <a href="#movies">
              <IoMdFilm className="icon" />
              <span>Movies</span>
            </a>
          </div>
          <div className="menu-item">
            <a href="#tv-shows">
              <MdLiveTv className="icon" />
              <span>TV Shows</span>
            </a>
          </div>
          <div className="menu-item">
            <a href="#sports">
              <MdSportsSoccer className="icon" />
              <span>Sports</span>
            </a>
          </div>
          <div className="menu-item">
            <a href="#live-tv">
              <MdLiveTv className="icon" />
              <span>Live TV</span>
            </a>
          </div>
        </div>
        <div className="header-section right-section">
          <div className="menu-item search-container">
            <input type="text" placeholder="Search" className="search-input" />
            <FaSearch className="icon" />
          </div>
          <div className="menu-item">
            <FaUserAlt className="icon" />
          </div>
        </div>
      </header>
    );
  };
  

export default Header;
