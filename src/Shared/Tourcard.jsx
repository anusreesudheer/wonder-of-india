import React from 'react' 
import './Tourcard.css'
import { Card, CardBody } from 'react-bootstrap'
import { RiMapPinLine } from "react-icons/ri"
import { FaStar } from "react-icons/fa"
import { Link } from 'react-router-dom'


function Tourcard({tour}) {
const {id, title, city, photo , price, avgrating, reviews}=tour;
  return (
    <div className="tour_card">.
    <Card>
      <div className='tour_img'>
        <img src={photo} alt='tour_img' />
       
      </div>
    </Card>
    <CardBody>
      <div className="card_top d-flex align-items-center justify-content-between">
        <span className="tour_location d-flex align-items-center  gap-1">
        <h5><i><RiMapPinLine  className="icon"/></i>{city}</h5>
        </span>
        <span className="tour_rating d-flex align-items-center  gap-1">
        <h5><i><FaStar  className="icon"/></i>{avgrating }{''}</h5>
        
        <span>({reviews.length})</span>
        
        </span>
      </div>

      <h5 className="tour_title"><Link to={'/travelplan/${id}'}>{title}</Link></h5>
      <div className="card_bottom d-flex align-items-centee justify-content-between mt-3">
        <h5>Rs{price}<span>/per person</span></h5>

        <button className="btn booking_btn">
          <Link to={'/travelplan/${id}'}>Book Now</Link>
        </button>
      </div>
    </CardBody>
    </div>
  )
}

export default Tourcard