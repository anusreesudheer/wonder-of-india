import React from 'react' 
import './Tourcard.css'
import { Card, CardBody } from 'react-bootstrap'
import { RiMapPinLine } from "react-icons/ri"
import { FaStar } from "react-icons/fa"
import { Link } from 'react-router-dom'


function Tourcard({tour}) {
const {id, title, city, photo , price, featured, avgrating, reviews}=tour
  return (
    <div className="tour_card">.
    <Card>
      <div className='tour_img'>
        <img src={photo} alt='' />
       
      </div>
    </Card>
    <CardBody>
      <div className="card_top d-flex align-items-center justify-content-between">
        <span className="tour_location d-flex align-items-center justify-content-between">
        <i><RiMapPinLine  className="icon"/></i>{city}
        </span>
        <span className="tour_rating d-flex align-items-center justify-content-between">
        <i><FaStar  className="icon"/></i>{avgrating}{"/"}
        <span>({reviews.length})</span>
        </span>
      </div>

      <h5 className="tour_title"><Link to={'/tours/$(id)'}>{title}</Link></h5>
      <div className="card_bottom d-flex align-items-centee justify-content-between mt-3">
        <h5>Rs{price}<span>/per person</span></h5>

        <button className="btn booking_btn">
          <Link to={'/tours/$(id)'}>Book Now</Link>
        </button>
      </div>
    </CardBody>
    </div>
  )
}

export default Tourcard