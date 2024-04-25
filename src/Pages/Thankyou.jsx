import React from 'react'
import { Container, Row ,Col,Button} from 'react-bootstrap'
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '../Style/Thankyou.css'

export const Thankyou = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className="pt-5" text-center>
                <div className="thank_you">
                  <span>
                    <i><FaRegCircleCheck className="icon thankyou"/></i>
                    <h1>Thank you</h1>
                    <h3>Your booking is confirmed</h3>
                  </span>
                  <Button className=" second btn secondary__btn "  ><Link to='/home'>Back to home</Link></Button>
                  {/* <Button className="btn secondary__btn "  ><Link to={`/profile`}>booked details</Link></Button> */}
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    
  )
}
