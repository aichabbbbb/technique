import React from 'react';

const PourLesGroupes = () => {
  return (
    <div className="bg-white">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        {/* Include Animate.css */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <img
              alt="People dining in a restaurant"
              className="rounded-lg animate__animated animate__backInLeft"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/YmWdhhBKFapKBZKgq6fKmtRwyA8zUYApfjhAMpXOgC7KyWtTA.jpg"
              width="300"
            />
            <img
              alt="Interior of a restaurant"
              className="rounded-lg animate__animated animate__backInLeft"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/JzL8GsCof52jQaBKRc9gH4r1Dcnq6VhCfKdLbIoRqePNktanA.jpg"
              width="300"
            />
            <img
              alt="Chef holding a plate with fish"
              className="rounded-lg animate__animated animate__backInLeft"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/D04hYNH5ONLwId6AciaKErkMXuZXkrbVd2mrfjqK4KsCZr2JA.jpg"
              width="300"
            />
            <img
              alt="Plate with food and fork"
              className="rounded-lg animate__animated animate__backInLeft"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/fZ6r2BkGxUWYMqLu59ZDYffNHoStJeAz3X9WeolWkfLPjsV7E.jpg"
              width="300"
            />
            <img
              alt="Dish with seafood and vegetables"
              className="rounded-lg animate__animated animate__backInLeft"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/rvLfWCOEUsXFe0kjWncfWgV3ullJYpQSC33DzvoeeXQHR2qdC.jpg"
              width="300"
            />
            <img
              alt="Plate with meat and vegetables"
              className="rounded-lg animate__animated animate__backInLeft"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/Ng7cJUm8KQKeQCDdoekKjqBjl0t55dAUj0apB3SLem9SktanA.jpg"
              width="300"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-lg animate__animated animate__backInRight">
              <h1 className="text-4xl font-bold text-black">
                POUR
                <br />
                LES
                <br />
                GROUPES
              </h1>
              <p className="mt-4 text-gray-700">
                Notre restaurant est situé entre Guyancourt, Montigny le Bretonneux, à quelques minutes de Paris. Nos 80 couverts accueillent vos repas d'affaires, cousinades, anniversaires et mariages.
              </p>
              <a className="mt-4 inline-block text-orange-500 font-bold" href="#">
                Notre offre pour les groupes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PourLesGroupes;
