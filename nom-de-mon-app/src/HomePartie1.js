import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ReservationSlider = () => {
    const [counter, setCounter] = useState(0);
    const slides = [
        {
            alt: "Delicious food on a plate",
            src: "https://storage.googleapis.com/a1aa/image/5gv1LoRXHPLCFR2nPeCyGEvhMtfEerjX7NCFMp4JDyPAr0anA.jpg"
        },
        {
            alt: "Elegant dining setup with wine glasses",
            src: "https://storage.googleapis.com/a1aa/image/ZWEeMskYtF3FJCcdxQZKYZ0xzcfbYaRXk9DbN4WT17FjVatTA.jpg"
        },
        {
            alt: "Chef preparing gourmet dish",
            src: "https://storage.googleapis.com/a1aa/image/C7h7HXT67VZ2JNT7ec3yh5eTNBIKx35jtXetWz3jx2EJr0anA.jpg"
        },
        {
            alt: "Restaurant interior with cozy lighting",
            src: "https://storage.googleapis.com/a1aa/image/Dfq3XYlmxWUsKSMAMAY3X1koxQ5d2EeBm2dGJLPRdP2iVatTA.jpg"
        },
        {
            alt: "Outdoor dining area with beautiful view",
            src: "https://storage.googleapis.com/a1aa/image/nrLhfL3ieqir5UWB3V3NUqEfTL7qSFgdX4s4UN0s9xxeVp1OB.jpg"
        },
        {
            alt: "Close-up of a gourmet dessert",
            src: "https://storage.googleapis.com/a1aa/image/edcZXLOy8N0FCaqAGrSUZqp4vgnlYE1yghbEAAZgNmYvKt2JA.jpg"
        }
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((prevCounter) => (prevCounter + 1) % slides.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [slides.length]);

    return (
        <div className="slider relative overflow-hidden w-full h-[800px]">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            
            {/* Slide Images */}
            <div className="slides flex transition-transform duration-500" style={{ transform: `translateX(-${counter * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="slide min-w-full" key={index}>
                        <img alt={slide.alt} className="w-full h-[800px] object-cover" src={slide.src} />
                    </div>
                ))}
            </div>
            
            {/* Reservation Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="flex flex-col items-start justify-center h-screen animate-slide-down" key={counter}>
                    
                <Link to="/reservation"> {/* Update this path to your reservation form route */}
                        <button className="bg-[#f4a300] text-white py-3 px-6 rounded-full text-lg flex items-center">
                            <i className="fas fa-bell mr-2"></i> RÉSERVER UNE TABLE
                        </button>
                    </Link>
                </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="navigation-manual absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`manual-btn border-2 border-white w-3 h-3 rounded-full cursor-pointer transition duration-300 ${index === counter ? 'bg-white' : 'bg-transparent'}`}
                        onClick={() => setCounter(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReservationSlider;
