import React ,{useState} from 'react';
import { Container,Row,Col,Button,Form } from 'react-bootstrap';
import login from '../assets/Logo/login.png'
import '../Style/Login.css'
import { Link } from 'react-router-dom';
import Newsletter from '../Shared/Newsletter'

const Login = () => {

  const [book, setBook] = useState({
    email:undefined,
    password:undefined
})

  

  const handleChange = e => {
    setBook(prev=>({...prev,[e.target.id]:e.target.value}))
};

  const handleClick = e =>{
    e.preventDefault()
  }
  return (
   <>
   <section>
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
        <Form onSubmit={handleClick}> 
           <label>
           <h5>Email:</h5>
              <input type="text" placeholder="" id="fullName" required onChange={handleChange}/>
          </label>
          <br/>
          <label>
          <h5>Password:</h5>
              <input type="password" placeholder="" id="password" required onChange={handleChange}/>
          </label>
          <br/>
          <Button className='btn primary__btn auth_btn ' type='submit'>Login</Button>
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
   <br/>
    <Newsletter/>
    </>
  );
}

export default Login;