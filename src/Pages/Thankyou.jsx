import React from 'react'
import { Container, Row ,Col,Button} from 'react-bootstrap'
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Thankyou = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className="pt-5" text-center>
                <div className="thank_you">
                  <span>
                    <i><FaRegCircleCheck className="icon"/></i>
                    <h1>Thank you</h1>
                    <h3>Your booking is confirmed</h3>
                  </span>
                  <Button className="btn secondary__btn "  ><Link to='/home'>Back to home</Link></Button>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    
  )
}
