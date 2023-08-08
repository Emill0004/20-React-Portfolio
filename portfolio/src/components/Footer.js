import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid style={{background: '#220C10', color: '#BAC7BE', height: '10vh', position: 'absolute', bottom: '0'}}>
            <h5>Email: e.s.miller13125@gmail.com</h5>
            <h5>Phone Number: (801)554-8423</h5>
        </Container>
    )
}

export default Footer;