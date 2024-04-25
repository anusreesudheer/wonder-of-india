import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import login from '../assets/Logo/login.png'
import '../Style/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import Newsletter from '../Shared/Newsletter'
import { AuthContext } from '../Context/AuthContext';
import { BASE_URL } from '../Utils/config';
import axios from 'axios'

const Login = () => {

  const [book, setBook] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState('');
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = e => {
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const handleClick = async e => {
    e.preventDefault()

    dispatch({ type: 'LOGIN_START' })

    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, book);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data.data });
      alert('Successfully logged in');
      navigate('/');
    } catch (error) {
      alert('Login failed. Please try again later.');
    }
  };
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='position-relative'>
              <div className="login_container d-flex justify-content-between">
                <div className="image_container1">
                  <img src={login} alt="" />
                </div>

                <div className="card-body">
                  <div className="login-box">
                    <h2 > Login</h2>
                    <Form onSubmit={handleClick}>
                      <label>
                        <h5>Email:</h5>
                        <input type="text" placeholder="" name="email" id="fullName" required onChange={handleChange} />
                      </label>
                      <br />
                      <label>
                        <h5>Password:</h5>
                        <input type="password" placeholder="" name="password" id="password" required onChange={handleChange} />
                      </label>
                      <br />
                      <Button className='but btn primary__btn auth_btn ' type='submit'>Login</Button>
                    </Form>
                    <div className="text_centre">
                      <p><h6>Don't have an account ?</h6><Link to='/signup'><h6><i>resigter now</i></h6></Link></p>
                    </div>
                  </div>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
      <br />
      <Newsletter />
    </>
  );
}

export default Login;