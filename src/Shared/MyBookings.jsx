import React,{useEffect, useContext,useState}  from 'react'
import axios from 'axios';
import { BASE_URL } from '../Utils/config';
//import { AuthContext } from '../Context/AuthContext';
// import Booking from '../Components/Booking/Booking';

const MyBookings = ({id}) => {
    const [bookings, setBookings] = useState([]);
    //const { user } = useContext(AuthContext)

    console.log(bookings,{id})
console.log(id)
    useEffect(() => {
      const fetchBookings = async () => {
        try {
          const response = await axios.post(`${BASE_URL}/booking/${id} `);
          setBookings(response.data);
        } catch (error) {
          //console.error('Error fetching bookings:', error);
        }
      };
      fetchBookings();
    }, []);

  return (
    <div>
    <div className="row">
      <div className="col-md-6">
       <h3>My Bookings</h3>
       <div className="bs">
       {bookings.map(booking => (
          <tr key={booking.id}>
            <h4>Full Name: {booking.fullName}</h4>
            <h4>Tour Name: {booking.tourName}</h4>
            <h4>Phone: {booking.phone}</h4>
            <h4>Booked At: {booking.bookAt}</h4>
            <h4>Guest Size: {booking.guestSize}</h4>
            {/* <h4>TotalAmount:{totalAmount}</h4> */}
            
          </tr>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default MyBookings