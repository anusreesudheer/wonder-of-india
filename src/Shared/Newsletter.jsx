import React from 'react'
import './Newsletter.css'
import { Container, Row,Col,Button } from 'react-bootstrap'
import world from '../assets/Logo/world.png'
import logo1 from '../assets/Logo/logo1.jpg'

const Newsletter = () => {
  return (
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter_content'>
                    <h2 className='newsletter'>How do i make a booking on Wonder of india</h2>
                    <p className='newsletterp'><h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum impedit nam minus mollitia a quidem aspernatur amet nisi autem eos, provident praesentium necessitatibus iure, ullam minima consequatur asperiores in. Voluptatum?</h5></p>
                </div>
            </Col>

            <Col lg='6'>
            <img src={world} alt=""  /> 
            </Col>

            <Col lg='6'>
            <img src={logo1} alt=""  /> 
            </Col>

            <Col lg='6'>
            <div className='newsletter_content1'>
                    <h5 className='newsletter'>Subscribe now to get useful traveling information</h5>
                    <div className='newsletter_input'>
                        <input type='email' placeholder='Enter the email'></input>
                        <Button className='btn primary__btn auth_btn' type='submit'>Subscribe</Button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Newsletter