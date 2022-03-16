import React, { useEffect, useMemo } from 'react';
import Navigation from '../Navigation';
import { Link, useLocation } from 'react-router-dom'
import { Container, Row, Col, Button, Card, Form, Image } from 'react-bootstrap'
import { useState } from 'react'
import circle from '../../assets/circle.png'

const Layout = ({ children }) => {
    let location = useLocation();
    const [widthL, setWidthL] = useState(3);
    const [width, setWidth] = useState(9);
    console.log('location', location)
    return (
        <Container fluid className="p-0">
            <Row lg={12} fluid>
                {location.pathname !== '/' && location.pathname !== '/register' && location.pathname !== '/register_play' && location.pathname !== '/register_play_profile' ? <Col lg={widthL}  style={{height: '100vh'}}>
                    <div className="bg-dark" style={{height: '100vh'}}>
                    <Button
                        
                        onClick={() => {
                            if (widthL === 1) {
                                setWidthL(3)
                                setWidth(9)
                            } else {
                                setWidthL(1)
                                setWidth(11)
                            }
                        }}
                    >
                        Menu
                    </Button>
                    {widthL === 3 ? 
                    <Row className="">
                        <Col lg={12}>
                            <Row className="justify-content-center">
                                <div style={{width: '60%'}} className="justify-content-center">
                                    <Image className="mx-auto" src={circle} roundedCircle fluid style={{width: '200px'}}/>
                                    <p className="mt-3 h5 mx-auto text-white">Usuario Play</p>
                                    <p className="mx-auto  text-white">Inicio</p>
                                    <p className="mx-auto  text-white">Mis productos</p>
                                    <p className="mx-auto  text-white">Lobby</p>
                                    <p className="mx-auto  text-white">Wallet</p>
                                    <p className="mx-auto  text-white">Cerrar Sesion</p>
                                    <Button className="my-1" variant="danger" style={{borderRadius: '20px', width: '100%'}}>
                                        Nuevo Producto
                                    </Button>
                                    <Button className="my-1" variant="danger" style={{borderRadius: '20px', width: '100%'}}>
                                        Valor de Membresía
                                    </Button>
                                    <Button className="my-1" variant="danger" style={{borderRadius: '20px', width: '100%'}}>
                                        Iniciar Live
                                    </Button>
                                    <p className="mx-auto mt-3  text-white">Play v0.0</p>
                                </div>
                            </Row>
                        </Col>
                    </Row> : ''}

                    </div>
                </Col> : ''}
                <Col lg={width}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default Layout;
