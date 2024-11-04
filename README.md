Restaurant

Description

Restaurant est un site web interactif permettant aux utilisateurs de découvrir le menu du restaurant, de consulter les avis des clients, et de faire des réservations en ligne. L'objectif est de fournir une expérience utilisateur fluide pour faciliter les réservations et donner un aperçu des plats et de l'ambiance du restaurant.

Fonctionnalités
Système de réservation en ligne : Réservez une table directement depuis le site en choisissant une date, une heure, et le nombre de convives.
Consultation du menu : Parcourez le menu et découvrez les plats proposés par le restaurant.
Avis clients : Consultez les avis des clients pour connaître leur retour sur les services et plats.
Contact et localisation : Obtenez les informations de contact et visualisez l'emplacement du restaurant sur une carte interactive.
Technologies Utilisées
Frontend : HTML, CSS, JavaScript, React, Tailwind CSS
Backend : Django
Base de données : SQLite (db.sqlite)
Autres outils : Axios pour les requêtes HTTP, Animate.css pour les animations
Installation
Étapes d'installation
Clonez le dépôt :

bash
Copier le code
git clone https://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@github.com/aichabbbbb/technique.git
Accédez au dossier du projet :

bash
Copier le code
cd technique
Installez les dépendances pour le front et le backend :

Frontend :

bash
Copier le code
cd front
npm install axios
npm install -D tailwindcss
npx tailwindcss init
npm install animate.css --save
npm install
Backend :

cd backend
pip install djangorestframework
pip install django-cors-headers
Configurer les Variables d'Environnement :

Assurez-vous de configurer les paramètres de base, comme l’URL de la base de données et les clés d’API (le cas échéant), dans les fichiers settings.py pour Django et .env pour les configurations du frontend.
Lancer l'application :

Frontend :


cd front
npm start
L'application frontend devrait maintenant être accessible via http://localhost:3000.

Backend :

cd backend
python manage.py runserver
L'API backend sera accessible via http://localhost:8000.
