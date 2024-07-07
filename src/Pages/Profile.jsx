import React, { useEffect, useContext } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AuthContext } from '../Context/AuthContext';
import MyBookings from '../Shared/MyBookings';
import "../Style/Profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      window.location.href = '/login';
    }
  }, [user]);

  return (
    <div className='profile-container'>
      <Tabs className='profile-tabs'>
        <Tab eventKey="profile" title="Profile">
          <div className='profile-content'>
            <h1>My profile</h1>
            <br />
            <h3>User-id: {user && user._id}</h3>
            <h3>Name: {user && user.userName}</h3>
            <h3>Email: {user && user.email}</h3>
          </div>
        </Tab>
        <Tab eventKey="bookings" title="Bookings">
          <div className='profile-content'>
            {user && <MyBookings userId={user._id} />} 
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Profile;
