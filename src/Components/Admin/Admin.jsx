import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Getallbookings from './Getallbookings';
import Getalluser from './Getalluser';
import Getalltours from './Getalltours';
import AddTour from './AddTour';

const Admin = () => {
  return (
    <div className='ml-3 mt-3 d flex'>
      <Tabs>
        
          <h1>Admin panal</h1>
       
        <Tab eventKey="Bookings" title="Booking">
          < Getallbookings />
        </Tab>
        <Tab eventKey="User" title="User">
          <Getalluser/>
        </Tab>
        <Tab eventKey="Tour" title="Tour">
          <Getalltours/>
        </Tab>
        <Tab eventKey="Add Tours" title="Add Tours">
         <AddTour/>
        </Tab>
      </Tabs>
    </div>
  )
}

export default Admin