import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Restaurant = () => {
  const [navClasses, setNavClasses] = useState('text-white'); // Default to white text
  const [paddingTop, setPaddingTop] = useState('5%'); // Default padding

  const handleScroll = () => {
    if (window.scrollY > 50) { // Adjust this value for when to apply the background
      setNavClasses('bg-white text-black'); // Set background to white and text to black
      setPaddingTop('2%'); // Adjust padding when background is set
    } else {
      setNavClasses('text-white'); // Reset to white text with no background
      setPaddingTop('5%'); // Reset to original padding
    }
  };

  useEffect(() => {
    handleScroll(); // Set initial state based on current scroll position
    window.addEventListener('scroll', handleScroll); // Add event listener for scrolling

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-yellow-600 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <i className="fas fa-map-marker-alt"></i>
            6 Place de la Commune de Paris 78280 Guyancourt
          </div>
          <div>
            Déjeuner : de 12h à 14h (du lundi au vendredi) | Dîner : de 19h à 21h (du lundi au samedi)
            <i className="fas fa-phone-alt"></i>
            Tel : 01 30 44 11 82
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div 
        style={{ paddingTop }} 
        className={`fixed top-0 left-0 w-full z-50 ${navClasses} px-6 py-4 flex justify-between items-center transition-all duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-yellow-600">
            logo
          </div>
          <div className="space-x-6">
            <Link 
              className="hover:text-customYellow transition-transform duration-200 ease-in-out transform hover:scale-105"
              to="/" 
            >
              ACCUEIL
            </Link>
            <Link 
              className="hover:text-customYellow transition-transform duration-200 ease-in-out transform hover:scale-105"
              to="/menu-groupes" 
            >
              MENU GROUPES
            </Link>
            <Link 
              className="hover:text-customYellow transition-transform duration-200 ease-in-out transform hover:scale-105"
              to="/menus" 
            >
              MENUS
            </Link>
            <Link 
              className="hover:text-customYellow transition-transform duration-200 ease-in-out transform hover:scale-105"
              to="/terrasse-jardin" 
            >
              TERRASSE - JARDIN
            </Link>
            <Link 
              className="hover:text-customYellow transition-transform duration-200 ease-in-out transform hover:scale-105"
              to="/contact" 
            >
              CONTACT
            </Link>
            <Link 
              className="hover:text-customYellow transition-transform duration-200 ease-in-out transform hover:scale-105"
              to="/Reservation"
            >
              RÉSERVER
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
     
    </div>
  );
};

export default Restaurant;
