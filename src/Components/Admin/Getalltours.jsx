import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Getalltours.css'
import { Container, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../Utils/config';
// import Tourcard from '../../Shared/Tourcard';

const Getalltours = (userId) => {
  const [tour, setTour] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await (await axios.get(`${BASE_URL}/tours `)).data
        setTour(response.data);
      } catch (error) {
        //console.error('Error fetching bookings:', error);
      }
    };
    fetchTours();
  }, [userId]);
  return (
    <Container>
      <Row>
        <div className="box-container ">
          <div className="col-ml-12">
            <h3>Tour Details</h3>
            <table className='table table- dark table-bordered'>
              <tbody className='box-t'>
                {tour && (tour.map(tour => {


                  return <tr key={tour.id}>
                    <h4>Tour Id:  {tour._id}</h4>
                    <h4>Title:{tour.title}</h4>
                    <h4>City: {tour.city}</h4>
                    <h4>Price: {tour.price}</h4>
                    <h4>maxGroupSize: {tour.maxGroupSize}</h4>
                    <h4>Description: {tour.desc}</h4>
                    {/* <h4>Photo: {tour.photo}</h4> */}

                  
                    <Button className=' butn btn secondary__btn'><Link to={`/update/${tour._id}`}>Update</Link></Button>
                   <Button className='butn btn secondary__btn'><Link to={`/delete/${tour._id}`}>Delete</Link></Button> 
                   
                  </tr>

                }))}

              </tbody>
            </table>
            <Button className='btn secondary__btn'><Link to={`/admin`}>Back</Link></Button> 
                   
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default Getalltours