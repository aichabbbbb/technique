import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-100" style={{ marginBottom: "20px" }}>
      <div className="relative">
        <div
          className="w-full h-screen bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://storage.googleapis.com/a1aa/image/skAswrJ3fiynY6ffufCflXIByx64ifH4nRHsyJfjhPj1rJs2JA.jpg)',
          }}
          alt="Background image of a cozy restaurant interior"
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="header-text text-4xl mb-2">Contactez-nous</h1>
          <h2 className="text-6xl font-bold">CONTACTER</h2>
        </div>
      </div>

      <div className="flex justify-center mt-10 space-x-10">
        <div className="bg-white p-10 shadow-lg rounded-lg text-center">
          <h3 className="header-text text-2xl mb-2">Où aller</h3>
          <h4 className="text-3xl font-bold mb-4">ADRESSE</h4>
          <p>La Chalosse, 6 Pl. de la Commune de Paris</p>
          <p>78280 Guyancourt</p>
        </div>
        <div className="bg-white p-10 shadow-lg rounded-lg text-center">
          <h3 className="header-text text-2xl mb-2">Quand venir</h3>
          <h4 className="text-3xl font-bold mb-4">HORAIRES</h4>
          <p>Déjeuner : de 12h à 14h (du lundi au vendredi)</p>
          <p>Dîner : de 19h à 21h (du lundi au samedi)</p>
        </div>
      </div>
      <div style={{ height: "30px" }}></div>

    </div>
    
  );
};

export default ContactPage;
