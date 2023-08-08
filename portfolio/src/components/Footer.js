import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid style={{background: '#220C10', color: '#BAC7BE', height: '10vh', position: 'absolute', bottom: '0'}}>
            <Row xs={3}>
                <Col xs={1}>
                <h5><a href="https://github.com/Emill0004" style={{color: '#BAC7BE'}}>GitHub</a></h5>
                </Col>
                <Col xs={1}>
                <h5><h5><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" style={{color: '#BAC7BE'}}>Linkedin</a></h5></h5>
                </Col>
                <Col xs={1}>
                <h5><a href="stackoverflow.com" style={{color: '#BAC7BE'}}>stackoverflow</a></h5>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;