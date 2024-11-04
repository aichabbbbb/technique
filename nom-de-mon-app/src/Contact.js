import React from 'react';
import Restaurant from './Navbar'; // Import your Restaurant component
import ImagrNavbar from './ImagrNavbar'; // Import your Partie2 component
import CantactPartie2 from './CantactPartie2'; // Import your Partie2 component

import RestaurantFooter from "./Footer"




const Home = () => {
  return (
    <div>
      <Restaurant /> {/* Render the Restaurant component */}
      <ImagrNavbar />
      <div style={{ height: "20px" }}></div>

      <CantactPartie2 />
      <RestaurantFooter />
      
     

      

    </div>
  );
};

export default Home;
