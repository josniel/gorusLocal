import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import routes from '../helpers/routes';
import api from '../utils/axios'

const HomePage = () => {

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
                logIn()
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
    const logIn = async () => {
        const body = { email, password }
        await api.post('login', body).then(res => {
            if (res) { // Se debe ejecutar una mutacion que modifique el state con sessionInfo
                /* const client = res.TRI_SESSION_INFO.roles.find(value => value === 2)
              if (client) {
                this.login(res)
                this.$router.push('/rooms')
              }  *//* else {
                this.login(res)
                this.$router.push('/')
              } */
              console.log('res', res)
            } else {
              console.log('error de ususario')
            }
        })
        
    
    }

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col>
          <Card className="mx-auto p-3" style={{width: '50%'}}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el Nombre" onChange={(evt) => setFullName(evt.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="Ingrese el Correo" onChange={(evt) => setEmail(evt.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese La Contraseña" onChange={(evt) => setPassword(evt.target.value)}/>
              </Form.Group>
              <Button variant="primary" onClick={setUser}>
                Crear Usuarios
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
};

export default HomePage;
