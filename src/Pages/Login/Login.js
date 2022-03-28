import React, { useState } from 'react'
import { Col, Container, Form, Row, Button} from 'react-bootstrap'
import Logo from '../../Assets/IMG/Rectangle 62.png'
import bg from '../../Assets/IMG/image 2.png'
import '../Login/Login.css'


const PindahHalamanS =()=>{
    window.location.href="/Dashboard"
}

export const Login = () => {
    let [email,setEmail] = useState("");
    let [password, setPassword] = useState("");
  
    
  return (
    <div >
    <Row id='Row'>
    <Col sm={6} id='background'><img src={bg} id='bg'></img></Col>
    <Col sm={4}>
    <Container className='login'>
      <img src={Logo}></img>
      <h3>Welcome, Admin BCR</h3><p></p>
      <Form>
        <div className="from-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email"/>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password"/>
        </div>
      </Form>
      <Button variant="primary" size="md" id='btn' onClick={()=>{PindahHalamanS()}}>Log In</Button>
    </Container>
    </Col>
    </Row>
    </div>
  )
}
