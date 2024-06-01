import React, { useEffect, useContext } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AuthContext } from '../Context/AuthContext';
//import Getallbookings from '../Components/Admin/Getallbookings';
import MyBookings from '../Shared/MyBookings';

const Profile = () => {

  const { user } = useContext(AuthContext)
  
  console.log(user)

  useEffect(() => {

    if (!user) {
      window.location.href = '/login'
    }
  },
  [user]);
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
        <Tab eventKey="" title="Bookings">
        {/* {user && <MyBookings userId={user._id} />} */}
        {user && <MyBookings userId={user._id}/>}
        </Tab>
      </Tabs>
    </div>
  )
}

export default Profile


