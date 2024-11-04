import React from 'react';

const RestaurantGuyancourt = () => {
  return (
    <div className="bg-white text-black">
      <head>
        <title>Restaurant à Guyancourt</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Include Animate.css */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <style>
          {`body {
            font-family: 'Roboto', sans-serif;
          }`}
        </style>
      </head>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center animate__animated animate__backInLeft">
          <h2 className="text-orange-500 text-lg">Restaurant à Guyancourt</h2>
          <h1 className="text-4xl font-bold mt-2">
            2 SALLES DE RESTAURANT.
            <br />
            60 PLACES DANS LE JARDIN.
          </h1>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="w-1/2 text-right pr-4">
            <p className="text-lg animate__animated animate__backInLeft">
              La Chalosse, terroir de Gascogne est un petit pays du département des Landes, fief
              historique de la production de foie gras. Le restaurant, qui peut accueillir jusqu'à
              80 personnes au coeur de Guyancourt, vous transporte dans une aventure gastronomique
              d'un des meilleurs terroirs de France.
            </p>
          </div>
          <div className="w-1/2 text-left pl-4">
            <p className="text-lg animate__animated animate__backInLeft">
              Notre grand jardin en gazon fraîchement planté vous accueille en couple, en famille
              ou en groupe tout au long de l'année. Le restaurant idéal pour les petites et
              grandes occasions professionnelles ou en famille. Découvrez notre{' '}
              <a className="text-blue-500" href="#">
                menu du moment
              </a>{' '}
              et{' '}
              <a className="text-blue-500" href="#">
                contactez nous pour toute question
              </a>.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="relative">
            <iframe
              width="800" // Set the width of the video
              height="400" // Set the height of the video
              src="https://www.youtube.com/embed/WW0SLuX8HsI" // Use the embed link format
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen // Allows full-screen mode
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantGuyancourt;
