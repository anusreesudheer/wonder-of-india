import React, { useEffect, useState } from 'react';
import { Button, Container, Row,Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams, } from 'react-router-dom';
import './Update.css'
import { Link } from 'react-router-dom';
const Update = () => {
    const { id } = useParams();
   
  const [update, setUpdate] = useState({
   
    title: '',
    city: '',
    price: "",
    maxGroupSize: '',
    desc: '',
    photo: '',
  });

//   u

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.put(`${BASE_URL}/tours/${id}`,update);
        console.log('Tour location updated successfully:', response.data);
      // Redirect or show success message
      alert("Tour location updated successfully")
      // navigate('/getalltour')

    } catch (error) {
        // alert("server error")
    }
  };
  

  return (
    <Container>
      <Row>
        <Col>
    <div className=' add_container '>
      <div className='  '>
        <h1 >Update tour</h1>
        <div className="add_box ">
          <form onSubmit={handleSubmit}>
            <label>
              <h3>Title</h3>
              <input type="text" name="title" placeholder="Title" value={update.title} onChange={handleInputChange} />
            </label>
            <br />
                        <label>
                            <h5>city</h5>
                            <input type="text" name="city" placeholder="City" value={update.city} onChange={handleInputChange}/>
                        </label>
                        <br />
                        <label>
                            <h5>price</h5>
                            <input type="number" name="price" placeholder="Price" value={update.price} onChange={handleInputChange}/>
                        </label>
                        <br />
                        <label>
                            <h5>Max. group size</h5>
                            <input type="number" name="maxGroupSize" placeholder="Max Group Size" value={update.maxGroupSize} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            <h5>Description</h5>
                            <textarea name="desc" placeholder="Description" value={update.desc} onChange={handleInputChange}></textarea>
                        </label>
                        <br />
                        <label>
                            <h5>Photo URL</h5>
                            <input type="text" name="photo" placeholder="Photo URL"value={update.photo} onChange={handleInputChange} />
                        </label>
                        <br />
                        <Button className='btn primary__btn auth_btn   ' type='submit'><Link to={`/getalltours`}>Update</Link></Button>
                        <Button className='btn secondary__btn'><Link to={`/getalltours`}>Cancel</Link></Button>
            {/* <Button className='btn primary__btn' type='submit'>Update</Button> */}
          </form>
        </div>
      </div>
    </div>
    </Col>
    </Row>
    </Container>
  );
};

export default Update;
