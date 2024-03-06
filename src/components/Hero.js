import React, { useRef } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import movieImage1 from '../Images/Hero Card/Avengers.jpg'; 
import movieImage2 from '../Images/Hero Card/Avengers.jpg'; 
import movieImage3 from '../Images/Hero Card/Avengers.jpg';
import movieImage4 from '../Images/Hero Card/Avengers.jpg';
import movieImage5 from '../Images/Hero Card/Avengers.jpg';
import movieImage6 from '../Images/Hero Card/Avengers.jpg';
import movieImage7 from '../Images/Hero Card/Avengers.jpg';
import movieImage8 from '../Images/Hero Card/Avengers.jpg';
import movieImage9 from '../Images/Hero Card/Avengers.jpg';
import movieImage10 from '../Images/Hero Card/Avengers.jpg';

const Hero = () => {
    const imagesRef = useRef(null);

    const scrollLeft = () => {
        imagesRef.current.scrollBy({ left: -imagesRef.current.offsetWidth, behavior: 'smooth' });
    };

    const scrollRight = () => {
        imagesRef.current.scrollBy({ left: imagesRef.current.offsetWidth, behavior: 'smooth' });
    };

    return (
        <section className="w-full bg-black">
            <div className="w-full p-6 text-white flex flex-col justify-center relative">
                <h1 className="text-3xl font-bold justify-center mb-4 text-center">Most Demanded Movies and TV Shows All Time</h1>
                <div className="relative overflow-hidden mx-auto max-w-screen-lg">
                    <FaArrowAltCircleLeft onClick={scrollLeft} className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-white text-3xl cursor-pointer" />
                    <div ref={imagesRef} className="flex gap-2 overflow-x-auto py-2" style={{ scrollbarWidth: 'none' }}>
                      
                        <img src={movieImage1} alt="Movie Poster 1" className="min-w-[20%]" />
                        <img src={movieImage2} alt="Movie Poster 2" className="min-w-[20%]" />
                        <img src={movieImage3} alt="Movie Poster 3" className="min-w-[20%]" />
                        <img src={movieImage4} alt="Movie Poster 4" className="min-w-[20%]" />
                        <img src={movieImage5} alt="Movie Poster 5" className="min-w-[20%]" />
                        <img src={movieImage6} alt="Movie Poster 6" className="min-w-[20%]" />
                        <img src={movieImage7} alt="Movie Poster 2" className="min-w-[20%]" />
                        <img src={movieImage8} alt="Movie Poster 2" className="min-w-[20%]" />
                        <img src={movieImage9} alt="Movie Poster 2" className="min-w-[20%]" />
                        <img src={movieImage10} alt="Movie Poster 2" className="min-w-[20%]" />
                    </div>
                    <FaArrowAltCircleRight onClick={scrollRight} className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-white text-3xl cursor-pointer" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
