import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Utils/config';

const MyBookings = ({ userId }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/booking/${userId}`);
        console.log(response.data); // Debug: check the API response
        setBookings(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error(err); // Log the actual error
        setError('Failed to fetch bookings');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>My Bookings</h3>
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Email</th>
            <th>Full Name</th>
            <th>Tour Name</th>
            <th>Phone</th>
            <th>Booked At</th>
            <th>Guest Size</th>
          </tr>
        </thead>
        <tbody className="box-t">
          {bookings.length ? (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.userId}</td>
                <td>{booking.userEmail}</td>
                <td>{booking.fullName}</td>
                <td>{booking.tourName}</td>
                <td>{booking.phone}</td>
                <td>{booking.bookAt}</td>
                <td>{booking.guestSize}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
