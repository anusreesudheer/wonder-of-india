import React, { useState,useContext } from 'react'
import './Booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { IoIosClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import useFetch from '../../Hook/useFetch';
import { BASE_URL } from '../../Utils/config';
import {AuthContext} from '../../Context/AuthContext'
//import tours from '../../assets/data/tours';


function Booking({tour}) {
console.log(tour)
    const { price, title, city } = tour;

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    
    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName:title,
        fullName:'',
        phone:'',
        bookAt:'',
        guestSize:'1',
    })
    //const [error, setError] = useState('');
    const handleChange = e => {
        setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
    };

    
    const totalAmount = Number(price) * Number(booking.guestSize) 
    const handleClick = async e => {
        e.preventDefault()

        booking.tourName = title
        console.log(booking,{title})
     

        try {
            const response = await axios.post(`${BASE_URL}/booking`,  booking);
            
                if (!user || user === undefined || user === null) {
                   return alert('Please sign in')
                }

           // alert('Your booking is confirmed ');
            navigate('/thankyou');
            

          } catch (error) {
            alert('Registration failed. Please try again later.');
          }
        };
 

  
  return (
    
      <div className="booking">
        <div className="booking_top d-flex align-items-center justify-content-between">
            <h3>Rs{price}<span>/per person</span></h3>
            {city}
        </div>


        <div className="booking_form">
            <h5>Details</h5>
            <Form className="booking_info_form">
                <FormGroup>
                    <input type="text" placeholder="Full Name" id="fullName" value={booking.fullName} required onChange={handleChange}/>
                </FormGroup>
                <br/>
                <FormGroup>
                    <input type="number" placeholder="phone" id="phone" value={booking.phone} required onChange={handleChange}/>
                </FormGroup>
                <br/>
                <FormGroup className="d-flex align-items-center" >
                    <input type="date" placeholder="" id="bookAt" value={booking.bookAt} required onChange={handleChange}/>
                    <input type="number" placeholder="guest" id="guestSize" value={booking.guestSize} required onChange={handleChange}/>
                </FormGroup>
            </Form>
        </div>  

        <div className="booking_bottom">
            <ListGroup>
                <ListGroupItem className="border-0 px=0">
                    <h5 className="d-flex align-items-center  gap-1">Rs{price} <IoIosClose className="icon"/>1 person</h5>
                   <span>Rs{price}</span> 
                   
                </ListGroupItem>
                <ListGroupItem className="border-0 px=0">
                    <h5>Total</h5>
                    <span>Rs {totalAmount}</span>
                   
                </ListGroupItem>
            </ListGroup>
            <Button className="btn primary__btn w-100 mt-4 " onClick={handleClick} >Book Now</Button>
       </div>

      </div>
    
    
  )
}

export default Booking