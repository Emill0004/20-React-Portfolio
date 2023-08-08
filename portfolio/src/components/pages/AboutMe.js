import React from 'react';
import pfp from '../../assets/pfp.jpg';
import { Container, Row, Col } from 'react-bootstrap';


function AboutMe() {
    return (
        <Container fluid style={{height: '88vh'}}>
            <Row>
                <Col>
                    <img src={pfp} style={{height: '50vh'}} alt="me on a cow bench"/>
                </Col>
                <Col>
                    <h3>ABOUT ME</h3>
                    <p>
                        My name is Eric Miller, I graduated from Innovations Early College High School in 2022 and jumped 
                        right into The Coding Bootcamp with hopes of starting a career in the tech world.
                    </p>
                </Col>
            </Row>
            
            
        </Container>
            
        
    )
}

export default AboutMe;