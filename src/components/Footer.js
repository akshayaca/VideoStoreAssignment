// Footer.js
import React from 'react';
import '../css/App.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Your Company. All rights reserved.</p>
        <div className="footer-links">
          <a href="#terms">Terms of Use</a>
          <a href="#policy">Privacy Policy</a>
          <a href="#preference">Cookie Preferences</a>
          <a href="#info">Corporate Information</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
