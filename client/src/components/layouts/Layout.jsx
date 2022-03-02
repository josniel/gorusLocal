import React, { useEffect, useMemo } from 'react';
import Navigation from '../Navigation';
import { Link, useLocation } from 'react-router-dom'
import { Container, Row, Col, Button, Card, Form, Image } from 'react-bootstrap'
import { useState } from 'react'
import circle from '../../assets/circle.png'

const Layout = ({ children }) => {
    let location = useLocation();
    const [width, setWidth] = useState(2);
    console.log('location', location)
    return (
        <Container fluid className="p-0">
            <Row lg={12} fluid>
                {location.pathname !== '/' ? <Col lg={width}  style={{height: '100vh'}}>
                    <div className="bg-dark" style={{height: '100vh'}}>
                    <Button
                        
                        onClick={() => {
                            if (width === 1) {
                                setWidth(2)
                            } else {
                                setWidth(1)
                            }
                        }}
                    >
                        Menu
                    </Button>
                    {width === 2 ? <Image src={circle} roundedCircle fluid style={{width: '300px'}}/> : ''}

                    </div>
                </Col> : ''}
                <Col lg={location.pathname !== '/' ? 10 : 12}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default Layout;
