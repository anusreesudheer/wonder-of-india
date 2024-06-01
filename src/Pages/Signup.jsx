import React, { useState, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import signup from '../assets/Logo/signup.png';
import { Link, useNavigate } from 'react-router-dom';
import '../Style/Signup.css';
import { BASE_URL } from './../Utils/config';
import { AuthContext } from './../Context/AuthContext';
import axios from 'axios';

const Signup = () => {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
    role: 'user', // default role is 'user'
    secretKey: '' // secret key for admin
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.role === 'admin' && user.secretKey !== 'anvika') {
      alert('Invalid secret key for admin registration');
      return;
    }
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, user);
      console.log('user detail',user);
      
      dispatch({ type: 'REGISTER_SUCCESS',payload:user});
      alert('Successfully registered');
      navigate('/login');
    } catch (error) {
      if (user.email && user.userName) {
        console.log(user.email)
        console.log(user.userName)
        alert("email is existing");
      } else {
        alert('Registration failed. Please try again later.');
      }
    }
  };

  const handleChange = e => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRoleChange = e => {
    setUser(prev => ({ ...prev, role: e.target.value }));
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="signup_container d-flex justify-content-between">
            <div className="image_container">
              <img src={signup} alt="" />
            </div>
            <div className="signup_box">
              <h2>Signup</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <h5>Role:</h5>
                  <label>
                    <h5>User <input type="radio" value="user" checked={user.role === 'user'} onChange={handleRoleChange} /></h5>
                  </label>
                  <label>
                    <h5>Admin <input type="radio" value="admin" checked={user.role === 'admin'} onChange={handleRoleChange} /></h5>
                  </label>
                </div>
                {user.role === 'admin' && (
                  <label>
                    <h5>Secret Key:</h5>
                    <input type="password" name="secretKey" value={user.secretKey} onChange={handleChange} required />
                  </label>
                )}
                <label>
                  <h5>Username:</h5>
                  <input type="text" name="userName" value={user.userName} onChange={handleChange} required />
                </label>
                <label>
                  <h5>Email:</h5>
                  <input type="email" name="email" value={user.email} onChange={handleChange} required />
                </label>
                <label>
                  <h5>Password:</h5>
                  <input type="password" name="password" value={user.password} onChange={handleChange} required />
                </label>
                <Button className='btn primary__btn auth_btn' type='submit'>Register</Button>
              </form>
              <div className="text_center">
                <p>
                  <Link to="/login">
                    <h6><i>Go to login</i></h6>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
