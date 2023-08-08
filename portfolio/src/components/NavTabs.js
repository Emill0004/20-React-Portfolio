import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Container fluid style={{background: '#220C10', height: '10vh', position: 'relative'}}>
      <Row>
        <Col xs={2}>
          <h1 style={{color: '#BAC7BE', position: 'absolute', bottom: '0'}}>Eric Miller</h1>
        </Col>
        <Col xs={7}>
        </Col>
        <Col xs={3}>
          <Row>
            <Col xs={3}>
                <a
                  style={{color: '#BAC7BE', fontSize: '2.5vh',position: 'absolute', bottom: '0', paddingBottom: '1vh'}}
                  href="#aboutme"
                  onClick={() => handlePageChange('AboutMe')}
                >
                  AboutMe
                </a>
              </Col>
              <Col xs={3}>
                <a
                  style={{color: '#BAC7BE', fontSize: '2.5vh',position: 'absolute', bottom: '0', paddingBottom: '1vh'}}
                  href="#portfolio"
                  onClick={() => handlePageChange('Portfolio')}
                >
                  Portfolio
                </a>
              </Col>
              <Col xs={3}>
                <a
                  style={{color: '#BAC7BE', fontSize: '2.5vh',position: 'absolute', bottom: '0', paddingBottom: '1vh'}}
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}
                >
                  Contact
                </a>
              </Col>
              <Col xs={1}>
                <a
                  style={{color: '#BAC7BE', fontSize: '2.5vh',position: 'absolute', bottom: '0', paddingBottom: '1vh'}}
                  href="#resume"
                  onClick={() => handlePageChange('Resume')}
                >
                  Resume
                </a>
              </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    
  );
}

export default NavTabs;