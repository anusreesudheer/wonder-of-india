import React from 'react'
import '../Style/Travelplan.css'
import { Container ,Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import tourData from  '../assets/data/tours' 
// import india from '../assets/Logo/india.jpg'
// import Newsletter from '../Shared/Newsletter'

function Travelplan() {

  const {id} = useParams()

const tour =tourData.find(tour => tour.id  === id)

const { title, photo, }=tour
  return (
    <>
   <section>
    <Container>
       <Row>
        <Col lg='8'>
          <div className="tour_content">
            <img src={photo} alt=""/>

            <div className="tour_info">
              <h2>{title}</h2>
            </div>
          </div>
        </Col>
       </Row>
    </Container>
   </section>
  
    </>
  )
}

 export default Travelplan
