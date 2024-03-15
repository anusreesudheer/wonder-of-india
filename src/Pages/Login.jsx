import React ,{useState} from 'react';
import { Container,Row,Col,Button, } from 'react-bootstrap';
import login from '../assets/Logo/login.png'
import '../Style/Login.css'
import { Link } from 'react-router-dom';
import Newsletter from '../Shared/Newsletter'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', { email, password });
  };
  return (
   <>
   <Container>
    <Row>
        <Col lg='6' className='position-relative'>
        <div className="login_container d-flex justify-content-between">
           <div className="image_container">
             <img src={login} alt="" />
           </div>
          
          <div className="card-body">
           <div className="login-box">
           <h2 > Login</h2>
        <form>
          <label>
            <h5>Email:</h5>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            <h5>Password:</h5>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <Button className='btn primary__btn auth_btn ' type='submit'>Login</Button>
        </form>
        <div className='text_centre'>
            <p><h6>Don't have an account ?</h6><Link to='/signup'><h6><i>resigter now</i></h6></Link></p>
           
        {/* {isLoggedIn && <p>You are logged in!</p>} */}
        </div>
      </div>
      </div>
    </div>
    
    
        </Col>
    </Row>
   </Container>
   <br/>
    <Newsletter/>
    </>
  );
}

export default Login;