import React from 'react';

const RestaurantFooter = () => {
  return (
    <div className="bg-orange-600 text-white py-8" style={{  background:"#ca8a04"}}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          <div className="w-1/3">
            <h2 className="font-bold">Restaurant à Guyancourt, La Chaloisse</h2>
            <p>
              propose des plats typiques de cette magnifique région du Sud Ouest. Dégustez notre foie gras, nos canards et nos authentiques plats gastronomiques
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-yelp"></i>
              </a>
            </div>
          </div>
          <div className="w-1/3 text-center">
            <img
              alt="Image of a restaurant in Guyancourt"
              className="h-auto"
              height="150"
              src="https://storage.googleapis.com/a1aa/image/8WkoI342w1rIKpPf4jbyfunAKJCwzPvHbHxGffF1GxyQsb1OB.jpg"
              width="100"
            />
          </div>
          <div className="w-1/3">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">RESOURCES</h3>
                <ul>
                  <li>Mentions légales</li>
                  <li>Politique des cookies</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">CONTACT</h3>
                <ul>
                  <li>
                    <i className="fas fa-phone"></i> 01 30 44 11 82
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i> lachaloisseresto (at) orange.fr
                  </li>
                  <li>
                    <i className="fas fa-globe"></i>
                    <a className="text-white" href="https://www.restaurantguyancourt.com/">
                      https://www.restaurantguyancourt.com/
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold">ADRESSE</h3>
                <p>
                  La Chaloisse, 6 Pl. de la Commune de Paris, 78280 Guyancourt
                </p>
               
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>
            Création site pour restaurant | Maintenance Wordpress | Référencement entreprises | Création site vitrine
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFooter;
