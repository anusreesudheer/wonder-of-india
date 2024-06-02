import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Utils/config';

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    fetchBookings();
  }, [userId]); // Run fetchBookings whenever userId changes

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/booking/${userId}`);

      if (response.data.success) {
        setBookings(response.data.data);
      } else {
        console.error(response.data.message);
        setBookings([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setBookings([]);
    }
  };

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  return (
    <div>
      <h1>My Bookings</h1>
      
      <div>
        {bookings.length > 0 ? (
          <div>
            <h2>Bookings:</h2>
            <ul>
              {bookings.map((booking) => (
                <li key={booking._id}>
                  <p>User ID: {booking.userId}</p>
                  <p>Tour Name: {booking.tourName}</p>
                  <p>Full Name: {booking.fullName}</p>
                  <p>Guest Size: {booking.guestSize}</p>
                  <p>Phone: {booking.phone}</p>
                  <p>Booked At: {booking.bookAt}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No bookings found</p>
        )}
      </div>
    </div>
  );
}

export default MyBookings;
