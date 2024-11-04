import React from 'react';
import backgroundImage from './istockphoto-1403657533-612x612.jpg'; // Adjust the path as necessary

const DecouvrirLeJardin = () => {
  return (
    <div className="bg-white">
      <head>
        <title>Découvrir le Jardin</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            .font-great-vibes {
              font-family: 'Great Vibes', cursive;
            }
            .font-roboto {
              font-family: 'Roboto', sans-serif;
            }
          `}
        </style>
      </head>
      <div className="relative">
        <img
          src={backgroundImage}
          alt="People dining under large red and orange umbrellas in a garden setting"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
          <h2 className="text-yellow-500 text-3xl font-great-vibes">
            La Chalose à Guyancourt
          </h2>
          <h1 className="text-white text-5xl font-roboto font-bold mt-2">
            DÉCOUVRIR LE JARDIN
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DecouvrirLeJardin;
