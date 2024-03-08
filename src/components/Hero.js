import React, { useState,useRef } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import movieImage1 from '../img/Avengers.jpg';
import movieImage2 from '../img/Breaking Bad.jpg';
import movieImage3 from '../img/Game of Thrones.jpg';
import movieImage4 from '../img/Inception.jpg';
import movieImage5 from '../img/StarWars.jpg';
import movieImage6 from '../img/Stranger Things.jpg';
import movieImage7 from '../img/The Crown.jpg';
import movieImage8 from '../img/The Lion King.jpg';
import movieImage9 from '../img/The Mandalorian.jpg';
import movieImage10 from '../img/ToyStory4.jpg';

const Hero = () => {
    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const cardWidth = 200; 
    const cardsToShow = 5; 

    const scrollLeft = () => {
        if (containerRef.current) {
            const newPosition = scrollPosition - cardWidth * cardsToShow;
            containerRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
            setScrollPosition(newPosition);
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            const newPosition = scrollPosition + cardWidth * cardsToShow;
            containerRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
            setScrollPosition(newPosition);
        }
    };

    return (
        <section className="w-full bg-black"style={{ background: 'linear-gradient(to left, #191970, #000000)' }}>
            <div className="w-full p-6 text-white flex flex-col justify-center relative">
                <h1 className="text-3xl font-bold justify-center mb-4 text-center">Most Demanded Movies and TV Shows All Time</h1>
                <div className="relative overflow-hidden mx-auto max-w-screen-lg">
                    <FaArrowAltCircleLeft onClick={scrollLeft} className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-black text-3xl cursor-pointer"/>
                    <div ref={containerRef} className="flex gap-2 overflow-x-auto py-2" style={{ scrollbarWidth: 'none' }}>
                        <img src={movieImage1} alt="Movie Poster 1" className="min-w-[20%] card" />
                        <img src={movieImage2} alt="Movie Poster 2" className="min-w-[20%] card" />
                        <img src={movieImage3} alt="Movie Poster 3" className="min-w-[20%] card" />
                        <img src={movieImage4} alt="Movie Poster 4" className="min-w-[20%] card" />
                        <img src={movieImage5} alt="Movie Poster 5" className="min-w-[20%] card" />
                        <img src={movieImage6} alt="Movie Poster 6" className="min-w-[20%] card" />
                        <img src={movieImage7} alt="Movie Poster 2" className="min-w-[20%] card" />
                        <img src={movieImage8} alt="Movie Poster 2" className="min-w-[20%] card" />
                        <img src={movieImage9} alt="Movie Poster 2" className="min-w-[20%] card" />
                        <img src={movieImage10} alt="Movie Poster 2" className="min-w-[20%] card" />
                    </div>
                    <FaArrowAltCircleRight onClick={scrollRight} className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-black text-3xl cursor-pointer" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
