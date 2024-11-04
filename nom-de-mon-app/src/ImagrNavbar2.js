import React from 'react';

const ImageMenu = () => {
  return (
    <div className="bg-gray-100" style={{ marginBottom: "20px" }}>
      <div className="relative">
        <div
          className="w-full h-[60vh] bg-cover bg-center" // Adjust height here (e.g., 60vh)
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

      <div style={{ height: "30px" }}></div>
    </div>
  );
};

export default ImageMenu;
