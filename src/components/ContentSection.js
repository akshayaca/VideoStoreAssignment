import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import m1 from '../img/Schitts Creek.jpg';
import m2 from '../img/The Blind Side.jpg';
import m3 from '../img/The Good Place.jpg';
import m4 from '../img/The Marvelous.jpg';
import m5 from '../img/Up.jpg';
import m6 from '../img/ToyStory4.jpg';



const ContentSection = () => {
  const [watchedTogether] = useState([
    { id: 1, title: 'Schitts Creek', description: 'A wealthy family loses their fortune and moves to a small town, living in a motel.', image: m1 },
    { id: 2, title: 'The Blind Side', description: 'A homeless African-American teenager is taken in by a caring family and becomes an NFL player.', image: m2 },
    { id: 3, title: 'The Good Place', description: 'A woman finds herself in the afterlife and must navigate through the concept of morality.', image: m3 },
    { id: 4, title: 'The Marvelous', description: 'A housewife pursues her passion for stand-up comedy in the 1950s.', image: m4 },
    { id: 5, title: 'Up', description: 'An elderly man fulfills his dream of adventure by tying thousands of balloons to his house.', image: m5 },
    { id: 6, title: 'ToyStory4', description: 'Woody, Buzz Lightyear, and their friends embark on a road trip with a new toy named Forky.', image: m6 },
]);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const containerRef = useRef(null);
    const history = useHistory(); // Use useHistory hook for navigation
    const scrollContainerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);


  
    const navigateToMovieListing = () => {
        history.push('/moviestvlisting'); // Adjust the path as needed for your routing
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setSelectedItemId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    

    return (
        <div className="bg-black p-6" ref={containerRef}>
        <h2 className="text-white text-2xl font-bold mb-4">Movies and TV Shows Watched Together</h2>
        <div className="relative flex items-center" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="overflow-hidden flex-grow" ref={scrollContainerRef}>
                <div className="flex gap-4 overflow-x-auto hide-scrollbar" style={{ scrollBehavior: 'smooth' }}>
                    {watchedTogether.map((item, index) => (
                        <div key={item.id} className="bg-black border border-black mx-1 my-1 flex-shrink-0 flex flex-col items-center shadow-neon-blue card cursor-pointer" style={{ minWidth: '250px' }}>
                            <img src={item.image} alt={item.title} className="w-80 h-50 object-cover" />
                            <p className="text-white font-semibold text-center p-2">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`absolute right-0 top-0 bottom-0 w-14 bg-gradient-to-l from-transparent to-black ${!isHovering && 'hidden'}`} />
            <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center px-4 cursor-pointer" onClick={navigateToMovieListing}>
                <span className="text-white text-xl">•••</span> {/* View More Icon */}
            </div>
        </div>
          
        <div className="mt-12 bg-dark px-6 md:px-4 lg:px-10 text-center mx-auto" style={{ maxWidth: '1200px' }}> {/* Ensure margin auto and maximum width */}
        <h2 className="text-white text-2xl font-bold mb-2 lg:mb-0 lg:pb-6">Exclusive Subscription</h2>
        <div className="flex flex-col items-center justify-center lg:gap-8"> {/* Ensure flex items are centered */}
            <div className="px-4" style={{ maxWidth: '800px' }}> {/* Control the maximum width of text container */}
                <h3 className="text-white font-bold mb-1">Ultimate Flexibility Package for Busy Couples</h3>
                <p className="text-white mb-2">Are you and your partner struggling to find time for movie nights amidst your hectic schedules? Say goodbye to rushing through movies and hello to uninterrupted quality time together with our Ultimate Flexibility Package!</p>
                <p className="text-white">Enjoy unrestricted access to our extensive video library for an extended period each day or week, giving you the flexibility to watch movies whenever it suits you best. Whether it's a quick mid-week pick-me-up or a leisurely weekend binge, the choice is yours!</p>
            </div>
        </div>
    </div>
    
    
    
        </div>
    );
};

export default ContentSection;
