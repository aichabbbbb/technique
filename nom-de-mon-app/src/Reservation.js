import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [reservationDate, setReservationDate] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [specialRequests, setSpecialRequests] = useState('');
    const [message, setMessage] = useState(''); // State for feedback message

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the reservation date is in the past
        const selectedDate = new Date(reservationDate);
        const currentDate = new Date();

        if (selectedDate < currentDate) {
            setMessage('La date de réservation ne peut pas être dans le passé.'); // Error message for past date
            setRestaurantName(''); // Clear the restaurant name if date is invalid
            return;
        }

        const reservationData = {
            customer_name: customerName,
            restaurant_name: restaurantName,
            reservation_date: reservationDate,
            number_of_guests: numberOfGuests,
            special_requests: specialRequests,
        };

        try {
            const response = await axios.post('http://localhost:8000/api/reservations/', reservationData);
            console.log('Réservation créée :', response.data);
            setMessage('Réservation créée avec succès !'); // Success message
            // Optionally reset form fields
            setCustomerName('');
            setRestaurantName('');
            setReservationDate('');
            setNumberOfGuests(1);
            setSpecialRequests('');
        } catch (error) {
            console.error('Erreur lors de la création de la réservation :', error);
            setMessage('Erreur lors de la création de la réservation. Veuillez réessayer.'); // Error message
        }
    };

    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Créer une réservation</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="customer_name" className="block text-gray-700 font-bold mb-2">Nom du client</label>
                        <input
                            type="text"
                            id="customer_name"
                            name="customer_name"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Entrez votre nom"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="restaurant_name" className="block text-gray-700 font-bold mb-2">Nom du restaurant</label>
                        <input
                            type="text"
                            id="restaurant_name"
                            name="restaurant_name"
                            value={restaurantName}
                            onChange={(e) => setRestaurantName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Entrez le nom du restaurant"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="reservation_date" className="block text-gray-700 font-bold mb-2">Date de réservation</label>
                        <input
                            type="datetime-local"
                            id="reservation_date"
                            name="reservation_date"
                            value={reservationDate}
                            onChange={(e) => setReservationDate(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="number_of_guests" className="block text-gray-700 font-bold mb-2">Nombre de convives</label>
                        <input
                            type="number"
                            id="number_of_guests"
                            name="number_of_guests"
                            value={numberOfGuests}
                            onChange={(e) => setNumberOfGuests(e.target.value)}
                            min="1"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="special_requests" className="block text-gray-700 font-bold mb-2">Demandes spéciales</label>
                        <textarea
                            id="special_requests"
                            name="special_requests"
                            value={specialRequests}
                            onChange={(e) => setSpecialRequests(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Entrez vos demandes spéciales"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button style={{ background: "#ca8a04" }} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Soumettre
                        </button>
                    </div>
                    {message && <p className="mt-4 text-red-500">{message}</p>} {/* Display success or error message */}
                </form>
            </div>
        </div>
    );
};

export default ReservationForm;
