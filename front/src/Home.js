import React from 'react';
import Restaurant from './Navbar'; // Import your Restaurant component
import Partie2 from './Partie2'; // Import your Partie2 component
import Partie3 from './Partie3'; // Import your Partie3 component
import DecouvrirLeJardin from "./DecouvrirLeJardin";
import HomeParti1 from "./HomePartie1";
import PourLesGroupes from "./PourLesGroupes";
import RestaurantFooter from "./Footer";

const Home = () => {
  return (
    <div>
        <Restaurant />
      <div style={{ display: 'grid', gridTemplateRows: 'auto', gap: '20px' }}>
        
        <HomeParti1 />
        <Partie2 />
        <Partie3 />
        <DecouvrirLeJardin />
        <PourLesGroupes />
        <RestaurantFooter />
      </div>
    </div>
  );
};

export default Home;
