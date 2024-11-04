import React from 'react';
import { Link } from 'react-router-dom';

const ReservationBanner = () => {
  return (
    <div className="relative">
      <img
        alt="Delicious food on a plate"
        className="w-full h-96 object-cover"
        height="600"
        src="https://storage.googleapis.com/a1aa/image/oFlLfFePDrvoeJJyAWEnKjzYKnxsT3fd4CZzUfwCsZPxsyqdC.jpg"
        width="1920"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Link className="bg-yellow-600 text-white px-6 py-3 rounded hover:bg-yellow-700" to="/Reservation">
          RÉSERVER UNE TABLE
        </Link>
      </div>
    </div>
  );
};

export default ReservationBanner;
