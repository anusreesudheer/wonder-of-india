import React, { useEffect, useContext } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AuthContext } from '../Context/AuthContext';

import MyBookings from '../Shared/MyBookings';

const Profile = () => {

  const { user } = useContext(AuthContext)
  //const user = JSON.parse(localStorage.getItem("currentUser"))
  console.log(user)

  useEffect(() => {

    if (!user) {
      window.location.href = '/login'
    }
  }
  )
  return (
    <div className='ml-3 mt-3 d flex'>
      <Tabs>
        <Tab eventKey="profile" title="Profile">
          <h1>My profile</h1>
          <br />
          <h3>User-id : {user && user._id}</h3>
          <h3>Name : {user && user.userName} </h3>
          <h3>Email : {user && user.email}</h3>
        </Tab>
        
      </Tabs>
    </div>
  )
}

export default Profile


// export function MyBookings() {

//   const { user } = useContext(AuthContext)

//   useEffect(async () => {

//     try {
//       const response = await axios.get(`${BASE_URL}/booking/:id`, { userid: user._id }).data
//       console.log(response)
//     } catch (error) {
//       console.log(error)
//     }

//   }
//   )


//   return (
//     <div>
//       <h3>My Bookings</h3>
//     </div>
//   )
// }