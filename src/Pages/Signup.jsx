// Signup.js
import React, { useState } from 'react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import signup from '../assets/Logo/signup.png'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [book, setBook] = useState({
    userName: undefined,
    email:undefined,
    password:undefined
})

  

  const handleChange = e => {
    setBook(prev=>({...prev,[e.target.id]:e.target.value}))
};

  const handleClick = e =>{
    e.preventDefault()
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your signup logic here
  //   console.log('Signup submitted:', { email, password });
  // };

  return (
    <Container>
      <Row>
        <Col >
        <div className="signup_container d-flex justify-content-between">
        <div className="image_container">
             <img src={signup} alt="" />
           </div>
           
           <div className="signup_box">
            <h2>Signup</h2>
            <form onSubmit={handleClick}>
            <label><h5>User Name:</h5>
            <input type="text" placeholder="" id='username' onChange={handleChange} required />
              </label>
              <br/> 
              <label><h5>Email:</h5>
              <input type="text" placeholder="" id="fullName" required onChange={handleChange}/>
              </label>
              <br/> 
              <label><h5>Password:</h5>
              <input type="password" placeholder="" id="password" required onChange={handleChange}/>
              </label>
              <br/>
              <Button className='btn primary__btn auth_btn' type='submit'>Sign up</Button>
           </form>
           <div className='text_centre'>
            <p><Link to='/login'><h6><i>go to logo in</i></h6></Link></p>
           
            </div>
        
          </div>
          </div>
    </Col>
    </Row>
    </Container>
  );
};

export default Signup;
