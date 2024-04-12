import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

const Footer = () => {
    return (
        <footer className="bg-black text-white p-8 text-center w-full">
            <div className="max-w-screen-lg mx-auto">
                <p className="text-xl mb-4">© 2024 Two Watch. All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    {/* Update anchor tags to Link components */}
                    <Link to="/terms" className="hover:text-blue-500 text-lg">Terms of Use</Link>
                    <Link to="/privacy" className="hover:text-blue-500 text-lg">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
