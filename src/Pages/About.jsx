import React from 'react'
import download from '../assets/Logo/download.jpg'
import { Container,Row,Col } from 'react-bootstrap'
import FeaturedList from '../Components/FeaturedTour/FeaturedList'
const About = () => {
  return (
    <>
         <div className="tour_content">
          <img src={download} alt=''/>
    </div>
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
          <p>Wonder's of india is an Indian online travel company, which was founded in 2024. Its headquarter is located in kannur , Kerala, the company provides online travel services </p>
            <h2 className="featured_tour">Our sites</h2>
          </Col>
          <FeaturedList/>
          
        </Row>
      </Container>
    </section>
        
    
    
    </>
  )
}

export default About