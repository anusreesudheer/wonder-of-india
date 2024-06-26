import React from 'react'
import '../Style/Home.css'
import logo from '../assets/Logo/logo.jpg'
import { Container ,Row, Col } from 'react-bootstrap'
import FeaturedList from '../Components/FeaturedTour/FeaturedList'
import Newsletter from '../Shared/Newsletter'


function Home() {
  return (
    <>
    <section className='home'>
      <div className="overlay"></div>
      <img src={logo} alt=""  /> 

      <div className="main">  
        <div className="text">
        
            <h1 className='text_1'>
              OH, THE PLACES YOU’LL GO!
            </h1>

            <span className="highlight">
              Explore your trip 
            </span>
             
        </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis itaque sint dicta rem quod. Omnis, rerum, debitis reiciendis a nesciunt totam fuga natus, unde ab ad dolorem inventore exercitationem delectus.</p>
     </div>
     </section>
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <h2 className="featured_tour">Our sites</h2>
          </Col>
          <FeaturedList/>
          <Newsletter/>
        </Row>
      </Container>
    </section>
    
     </>
  )
}

export default Home