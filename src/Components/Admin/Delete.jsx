import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Row,Col } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../Utils/config';
import './Delete.css'

const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [del, setDel] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`${BASE_URL}/tours/${id}`, del);
      console.log('Tour location deleted successfully:', response.data);
      setDel(response.data);
      alert("Tour location  deleted  successfully")
      navigate('/getalltour')

    } catch (error) {
      //alert("server error")
    }
  };
  return (
    <Container>
      <Row>
        <Col>
    <div className='del_container'>
      <table className='del_box'>
        <h4>Do you want to delete</h4>
        <Button onClick={handleSubmit} className=' t btn secondary__btn'>Delete</Button>
      <Button className=' del_bt btn secondary__btn'><Link to={`/getalltours`}>Cancel</Link></Button>
      </table>
      

    </div>
    </Col>
    </Row>
    </Container>
  )
}

export default Delete