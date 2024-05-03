import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Getallbookings.css'

const Getalluser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await (await axios.get(`${BASE_URL}/auth/ `)).data
        setUser(response.data);
      } catch (error) {
        //console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);



  return (
    <div className="box-container ">
      <div className="col-ml-12">
        <h3>User Details</h3>
        <table className='table table- dark table-bordered'>
          <tbody className='box-t'>
            {user && (user.map(user => {
              

              return <tr key={user.id}>
                <h4>userId:  {user._id}</h4>
                <h4>Username:{user.userName}</h4>
                <h4>Email: {user.email}</h4>
                <h4>Password: {user.password}</h4>
                <h4>Role: {user.role}</h4>
              </tr>

              
            }))}

          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Getalluser