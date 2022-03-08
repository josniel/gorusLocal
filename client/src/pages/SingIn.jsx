import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Container, Row, Col, Button, Card, Collapse, Form, Image } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react'
import routes from '../helpers/routes';
import api from '../utils/axios'
import circle from '../assets/circle.png'
import bg from '../assets/bg-login.jpg'

const HomePage = () => {

  const [ email, setEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);
  const [open, setOpen] = useState(false);

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
                <p className="text-white">¿Quieres generar contenido?<Button style={{textDecoration: 'none'}} class="text-white" variant="link" as={Link}  to="/register_play"><b>Registrate como usuario Play</b></Button></p>
                {/* <Button as={Link} to={routes.register}>crea una cuenta</Button> */}
                <p className="text-white">¿Prefieres disfrutar del contenido?<Button variant="link" class="text-white" style={{textDecoration: 'none'}} as={Link} to="/register"><b>Registrate como usuario</b></Button></p>
              </Form>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  )
};

export default HomePage;
