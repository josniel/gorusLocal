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
    const [ description, setDescription ] = useState(null);

    const setUser = async () => {

    
        const body = { full_name, email, description, rols: 2 }

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
                <label for = "file"> Haga clic aquí para activar la carga </label> <input type = "file" id = "file" style ={{display: "none"}}/>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text-white mx-4"><b>Escribe una breve descripción de ti</b></Form.Label>
                  <Form.Control style={{borderRadius: '20px', height: '140px'}}  as="textarea" onChange={(evt) => setDescription(evt.target.value)}/>
                </Form.Group>
                <Form>
                  <b>
                    <Form.Check
                      type="checkbox"
                      id={`default-checkbox`}
                      label="Acepto términos y condiciones de uso"
                      className="text-white text-bold"
                    />
                  </b>
                </Form>
                <Button variant="dark" style={{borderRadius: '20px', width: '40%'}} onClick={next}>
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
