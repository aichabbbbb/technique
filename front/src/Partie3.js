import React from 'react';

const LaChalosseGuyancourt = () => {
  return (
    <div className="bg-white">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`body {
            font-family: 'Roboto', sans-serif;
          }
          .script-font {
            font-family: 'Great Vibes', cursive;
          }`}
        </style>
      </head>
      <div className="relative">
        <img
          alt="Restaurant interior with tables set for dining"
          className="w-full h-96 object-cover"
          height="500"
          src="https://storage.googleapis.com/a1aa/image/OQ0tfqZ5XBw8ZisjLZbSU4sVttOWwu4uHlJ9mfLbhMm0lWtTA.jpg"
          width="1920"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500 text-4xl script-font">
          La Chalosse à Guyancourt
        </div>
      </div>
      <div className="flex justify-center mt-9"  style={{ padding: '10%' }}>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <img
              alt="Dish of gratin with garnish"
              className="w-full h-auto rounded-lg shadow-md"
              height="300"
              src="https://storage.googleapis.com/a1aa/image/48IPFmiiJ4plGlO4HG1suGGLPiw673DSyiSIrw7kMJacpV7E.jpg"
              width="300"
            />
          </div>
          <div>
            <img
              alt="Plate with foie gras and toasted bread"
              className="w-full h-auto rounded-lg shadow-md"
              height="300"
              src="https://storage.googleapis.com/a1aa/image/OiwJNfGATZS5Gq8eaWXKiRCi2N1MbSXy0PJcYzFOHtozlWtTA.jpg"
              width="300"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-yellow-500 text-xl script-font">Les Landes</h2>
            <h1 className="text-black text-3xl font-bold mt-2">LA CHALOSSE</h1>
            <p className="text-gray-700 mt-4">
              Franche et généreuse, la cuisine du Sud-Ouest rime avec douceur de vivre, rugby,
              ferias. Atlantique surtout foie gras et magret canard font la haute réputation
              gastronomique de cette magnifique région.
            </p>
            <a className="text-yellow-500 mt-4 inline-block" href="#">
              Les menus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaChalosseGuyancourt;
