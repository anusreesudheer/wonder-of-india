import React,{useEffect, useContext,useState}  from 'react'
import axios from 'axios';
import './Getallbookings.css'
import { BASE_URL } from '../../Utils/config';
//import { AuthContext } from '../Context/AuthContext';
// import Booking from '../Components/Booking/Booking';

const Getallbookings = ({userId}) => {
    const [bookings, setBookings] = useState([]);
    //const { user } = useContext(AuthContext)

    useEffect(() => {
      const fetchBookings = async () => {
        try {
          const response = await (await axios.get(`${BASE_URL}/booking/ `)).data
          setBookings(response.data);
        } catch (error) {
          //console.error('Error fetching bookings:', error);
        }
      };
      fetchBookings();
    }, [userId]);

  return (
    <div className="box-container ">
      <div className="col-ml-12">
        <h3>User Details</h3>
        <table className='table table- dark table-bordered'>
          <tbody className='box-t'>
        {/* {bookings.length && (<h1> Total Bookings{bookings.length} bookings </h1>)} */}
       {bookings.map(booking => (
          <tr key={booking.id}>
            <h4>userId: {booking.userId}</h4>
            <h4>Email: {booking.userEmail}</h4>
            <h4>Full Name: {booking.fullName}</h4>
            <h4>Tour Name: {booking.tourName}</h4>
            <h4>Phone: {booking.phone}</h4>
            <h4>Booked At: {booking.bookAt}</h4>
            <h4>Guest Size: {booking.guestSize}</h4>
            {/* <h4>TotalAmount:{totalAmount}</h4> */}
          </tr>
          
        ))}
       
       </tbody>
        </table>

      </div>
    </div>
  )
}

export default Getallbookings