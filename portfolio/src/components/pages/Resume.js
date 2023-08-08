import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Resume() {
    return (
        <Container fluid style={{height: '88vh'}}>
            <h2 style={{fontSize: '3.5vh'}}>
                < a style={{color: '#BAC7BE'}} href="../../assets/placeholder.png" download>Resume Download</a>
                </h2>
            <h2 style={{fontSize: '3.5vh'}}>Proficiencies</h2>
            <ul>
                <li>Front-End</li>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JaveScript</li>
                    <li>Jquery</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                </ul>
                <li>Back-End</li>
                <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>GraphQL</li>
                </ul>
            </ul>
        </Container>
        
    )
}

export default Resume;