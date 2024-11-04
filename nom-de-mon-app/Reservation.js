import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reservations = () => {
    const [reservations, setReservations] = useState([]);
    const [newReservation, setNewReservation] = useState({
        customer_name: '',
        restaurant_name: '',
        reservation_date: '',
        number_of_guests: '',
        special_requests: ''
    });

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/reservations/');
                setReservations(response.data);
            } catch (error) {
                console.error("There was an error fetching the reservations!", error);
            }
        };

        fetchReservations();
    }, []);

    const handleChange = (e) => {
        setNewReservation({
            ...newReservation,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/reservations/', newReservation);
            setReservations([...reservations, response.data]);
            // Reset the form fields
            setNewReservation({
                customer_name: '',
                restaurant_name: '',
                reservation_date: '',
                number_of_guests: '',
                special_requests: ''
            });
        } catch (error) {
            console.error("There was an error creating the reservation!", error);
        }
    };

    return (
        <div>
            <h1>Restaurant Reservations</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="customer_name"
                    placeholder="Customer Name"
                    value={newReservation.customer_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="restaurant_name"
                    placeholder="Restaurant Name"
                    value={newReservation.restaurant_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="datetime-local"
                    name="reservation_date"
                    value={newReservation.reservation_date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="number_of_guests"
                    placeholder="Number of Guests"
                    value={newReservation.number_of_guests}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="special_requests"
                    placeholder="Special Requests"
                    value={newReservation.special_requests}
                    onChange={handleChange}
                />
                <button type="submit">Add Reservation</button>
            </form>

            <ul>
                {reservations.map(reservation => (
                    <li key={reservation.id}>
                        {reservation.customer_name} - {reservation.restaurant_name} on {new Date(reservation.reservation_date).toLocaleString()} for {reservation.number_of_guests} guests
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reservations;
