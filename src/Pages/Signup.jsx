import React, { useState, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import signup from '../assets/Logo/signup.png';
import { Link, useNavigate } from 'react-router-dom';
import '../Style/Signup.css';
import { BASE_URL } from './../Utils/config';
import { AuthContext } from './../Context/AuthContext';
import axios from 'axios'

const Signup = () => {

  const [book, setBook] = useState({
    userName: '',
    email: '',
    password: ''
  })

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, book);
      dispatch({ type: 'REGISTER_SUCCESS' });
      alert('Successfully registered');
      navigate('/login');
    } catch (error) {
      alert('Registration failed. Please try again later.');
    }
  };

  const handleChange = e => {
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="signup_container d-flex justify-content-between">
            <div className="image_container">
              <img src={signup} alt="" />
            </div>
            <br />
            <div className="signup_box">
              <h2>Signup</h2>
              <div className="mb-3">
                <form onSubmit={handleSubmit}>
                  <label>
                    <h5>Username:</h5>
                    <input type="text" placeholder="" name="userName" value={book.userName} onChange={handleChange} required />
                  </label>
                  <label>
                    <h5>Email:</h5>
                    <input type="email" placeholder="" name="email" value={book.email} onChange={handleChange} required />
                  </label>
                  <label>
                    <h5>Password:</h5>
                    <input type="password" placeholder="" name="password" value={book.password} onChange={handleChange} required />
                  </label>
                  <br />
                  <Button className=' but btn primary__btn auth_btn ' type='submit'>register</Button>
                </form>
                <div className="text_centre">
                  <p>
                    <Link to="/login">
                      <h6>
                        <i>Go to login</i>
                      </h6>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
