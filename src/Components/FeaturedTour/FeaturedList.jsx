import React from 'react'
import Tourcard from '../../Shared/Tourcard'
import tourData from  '../../assets/data/tours'
import { Col } from 'react-bootstrap'

function FeaturedList() {
  return (
    <>
    {tourData?.map(tour=>(
        <Col lg='3' className='mb-4' key={tour.id}><Tourcard tour={tour}/>
        </Col>
       ) )}
        </>
  )
}

export default FeaturedList
