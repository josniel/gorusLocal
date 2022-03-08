import React from 'react';
import { Container, Row, Col, Button, Card, Image, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import routes from '../helpers/routes';
import api from '../utils/axios'
import circle from '../assets/circle.png'
import bg from '../assets/bg-woman.jpg'

const Register = () => {

  
  const [ full_name, setFullName ] = useState(null);
    const [ email, setEmail ] = useState(null);
    const [ password, setPassword ] = useState(null);

    const setUser = async () => {

    
        const body = { full_name, email, password, rols: 2 }

        let formData = new FormData()
        formData.append('dat', JSON.stringify(body))
    
        await api.post('register', formData, {
            headers: {
              'Content-Type': undefined
            }
        }).then(res => {
            if (res) {
                console.log('res :>> ', res);
            }
        });
    
        /* if (res.success) {
          alert(res.message)
        }
        else {
          setError(res.message)
        } */
    
    }
    const next = async () => {
    
    }

    const containerStyle = {
      position : "relative",
      width: "100vw",
      height: "100vh",
      backgroundImage:
        `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"/* "98vw 100%" */,
      backgroundPosition: "center center"
    };

  return (
    <Container style={containerStyle} fluid>
      <Row fluid lg={12} className="pt-5 align-items-center" style={{height: '100%'}}>
        <Col lg={5}>
          <Row className="justify-content-center">
            <Image src={circle} roundedCircle fluid style={{width: '300px'}}/>
            <p className="h1 text-white text-center">Registro usuario Play</p>
            <p style={{width: '70%'}} className="text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maxime, voluptas quod rem soluta ratione impedit! Assumenda esse, nemo sed nostrum libero quos quia vero officiis totam, voluptatum error incidunt!</p>
          </Row>
        </Col>
        <Col lg={7}>
          <Row className="justify-content-center">
            <div style={{width: '70%'}}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-white mx-4"><b>Ingresa nombre de usuario</b></Form.Label>
                  <Form.Control style={{borderRadius: '20px'}} type="text" onChange={(evt) => setEmail(evt.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text-white mx-4"><b>Ingresa tu contraseña</b></Form.Label>
                  <Form.Control style={{borderRadius: '20px'}} type="password" onChange={(evt) => setPassword(evt.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text-white mx-4"><b>Repita su contraseña</b></Form.Label>
                  <Form.Control style={{borderRadius: '20px'}} type="password" onChange={(evt) => setPassword(evt.target.value)}/>
                </Form.Group>
                <Button variant="dark" style={{borderRadius: '20px', width: '40%'}} as={Link} to="/register_play_profile">
                  <b>SIGUIENTE</b>
                </Button>
              </Form>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  )
};

export default Register;
