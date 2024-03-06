import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-8 p-4 text-center">
      <div className="max-w-screen-lg mx-auto">
        <p>© 2024 Your Company. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a href="#terms" className="hover:text-pink-500">Terms of Use</a>
          <a href="#policy" className="hover:text-pink-500">Privacy Policy</a>
          <a href="#preference" className="hover:text-pink-500">Cookie Preferences</a>
          <a href="#info" className="hover:text-pink-500">Corporate Information</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
