import React from 'react';
import { Container, Row, Col, Button, Card, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import routes from '../helpers/routes';
import api from '../utils/axios'
import logo from '../assets/background.jpg'
import bg from '../assets/bg-login.jpg'

const HomePage = () => {

  const [ email, setEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);

  const logIn = async () => {
    const body = { email, password }
    console.log('body :>> ', body);
    await api.post('login', body).then(res => {
        if (res) { // Se debe ejecutar una mutacion que modifique el state con sessionInfo
        /* routerCtx.history.push({
            pathname: `/index`
        }) */
        console.log('res', res)
           /*  const client = res.TRI_SESSION_INFO.roles.find(value => value === 2)
          if (client) {
            this.login(res)
            this.$router.push('/rooms')
          }  *//* else {
            this.login(res)
            this.$router.push('/')
          } */
        }
    })
}

const containerStyle = {
  position : "relative",
  width: "100vw",
  height: "91vh",
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
            <Image src={logo} roundedCircle fluid style={{width: '300px'}}/>
          </Row>
        </Col>
        <Col lg={7}>
          <Row className="justify-content-center">
            <div style={{width: '70%'}}>
              <p className="h1 text-white">Login</p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-white mx-4"><b>Ingresa nombre de usuario</b></Form.Label>
                  <Form.Control style={{borderRadius: '20px'}} type="email" onChange={(evt) => setEmail(evt.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text-white mx-4"><b>Ingresa tu contraseña</b></Form.Label>
                  <Form.Control style={{borderRadius: '20px'}} type="password" onChange={(evt) => setPassword(evt.target.value)}/>
                </Form.Group>
                <p className="text-white">¿Olvidaste tu contraseña? <b>Presiona aqui</b></p>
                <Button variant="dark" style={{borderRadius: '20px', width: '40%'}} onClick={logIn}>
                  INGRESAR
                </Button>
                <p className="text-white">¿Quieres generar contenido? <b>Registrate como usuario Play</b></p>
                <p className="text-white">¿Prefieres disfrutar del contenido? <b>Registrate como usuario</b></p>
              </Form>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  )
};

export default HomePage;
