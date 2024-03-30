import React from 'react'
import '../Style/Travelplan.css'
import {Container,Row,Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import Booking from '../Components/Booking/Booking'
//import useFetch from './../Hook/useFetch'
//import {BASE_URL} from './../Utils/config'


function Travelplan() {

  const {id} = useParams()

  const tour= tourData.find(tour=> tour.id === id)
  //const {data:tour} = useFetch(`${BASE_URL}/tours/${id}`)

  const {photo, title, desc}=tour;
 
  return (
  <>
  <section>
    <Container>
      <Row>
        <Col>
        <div className="tour_content">
          <img src={photo} alt=''/>
        </div>
        <div className="tour_info">
          <h2>{title}</h2>
          <h4>Description</h4>
          <p>{desc}</p>
        </div>
        </Col>
        <Col lg="4">
          <Booking tour={tour}/>
       </Col>
      </Row>
    </Container>
  </section>
  </>
  )
}

 export default Travelplan;
