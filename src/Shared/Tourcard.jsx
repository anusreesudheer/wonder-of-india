import React from 'react' 
import './Tourcard.css'
import { Card, CardBody } from 'react-bootstrap'
import { RiMapPinLine } from "react-icons/ri"
import { FaStar } from "react-icons/fa"
import { Link } from 'react-router-dom'


function Tourcard({tour}) {
const { _id,title, city, photo , price, avgrating,}=tour;
  return (
    <div className="tour_card">
    <Card>
      <div className="tour_img">
        <img src={photo} alt='tour_img' />
      </div>
      <CardBody>
      <div className="card_top d-flex align-items-center justify-content-between">
        <span className="tour_location d-flex align-items-center  ">
        <i> <h6><RiMapPinLine  className="icon"/></h6></i>{city}
        </span>
        <span className="tour_rating d-flex align-items-center  ">
        <i><h6><FaStar  className="icon"/></h6></i>{avgrating }{''}
        </span>
      </div>

      <h5 className="tour_title"><Link to={`/travel/${_id}`}>{title}</Link></h5>
      <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
        <h6>Rs{price}<span>/per person</span></h6>

        <button className="btn booking_btn">
          <Link to={`/travel/${_id}`}>Book Now</Link>
        </button>
    </div>    
    </CardBody>
    </Card>
    
    </div>
  )
}

export default Tourcard