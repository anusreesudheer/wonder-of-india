import React, { useState } from 'react'
import './Booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { IoIosClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Booking({tour}) {
    const {price,city}=tour;
    const navigate = useNavigate()

    const [book, setBook] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullName:'',
        phone:'',
        BookAt:'',
        guestSize:'1'
    })

    const handleChange = e => {
        setBook(prev=>({...prev,[e.target.id]:e.target.value}))
    };

    
    const totalAmount = Number(price) * Number(book.guestSize) 

    const handleClick = e =>{
      e.preventDefault()
      axios.post('',{userId, userEmail, fullname, phone, BookAt, guestSize}).then(result => console.log(result)).catch(err => console.log(err))

      navigate("/thankyou");
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
                    <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange}/>
                </FormGroup>
                <br/>
                <FormGroup>
                    <input type="number" placeholder="phone" id="phone" required onChange={handleChange}/>
                </FormGroup>
                <br/>
                <FormGroup className="d-flex align-items-center" >
                    <input type="date" placeholder="" id="BookAt" required onChange={handleChange}/>
                    <input type="number" placeholder="guest" id="guestSize" required onChange={handleChange}/>
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