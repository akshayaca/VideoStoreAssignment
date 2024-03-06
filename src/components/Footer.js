import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 text-center w-full">
      <div className="max-w-screen-lg mx-auto">
        <p className="text-xl mb-4">© 2024 Your Company. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#terms" className="hover:text-pink-500 text-lg">Terms of Use</a>
          <a href="#policy" className="hover:text-pink-500 text-lg">Privacy Policy</a>
          <a href="#preference" className="hover:text-pink-500 text-lg">Cookie Preferences</a>
          <a href="#info" className="hover:text-pink-500 text-lg">Corporate Information</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
