import React from 'react'
import india from '../assets/Logo/india.jpg'
import { Container,Row,Col } from 'react-bootstrap'
// import FeaturedList from '../Components/FeaturedTour/FeaturedList'
import useFetch from '../Hook/useFetch'
import { BASE_URL } from '../Utils/config'


const Travel = () => {

 // const {data:tours} = useFetch(`${BASE_URL}/tours`)
  return (
    <>
    <div className="tour_content">
          <img src={india} alt=''/>
    </div>
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <h2 className="featured_tour">Our sites</h2>
          </Col>
          {/* <FeaturedList/> */}
          
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Travel