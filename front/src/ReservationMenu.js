import React from 'react';
import Restaurant from './Navbar'; // Import your Restaurant component
import Reservation from './Reservation'; // Import your Partie2 component
import ImagrNavbar2 from './ImagrNavbar2'; // Import your Partie2 component

import RestaurantFooter from "./Footer";

const Home = () => {
  return (
    <div>
        <Restaurant />
        <ImagrNavbar2 />
      <div style={{ height: "20px" }}></div>
        <Reservation />
        
  
        <RestaurantFooter />
     
    </div>
  );
};

export default Home;
