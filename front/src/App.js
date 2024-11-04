import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Replace with your actual components
import Contact from './Contact'; // Replace with your actual components
import Reservation from './ReservationMenu'; // Replace with your actual components



// Import other components

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu-groupes"  />
        <Route path="/menus" />
        <Route path="/terrasse-jardin"  />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/Reservation"  element={<Reservation />}/>
        {/* Add more routes as necessary */}
      </Routes>
    </Router>
  );
};

export default App;
