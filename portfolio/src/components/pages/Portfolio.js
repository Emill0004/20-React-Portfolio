import React from 'react';
import main_course from '../../assets/main_course.png';
import work_day_scheduler from '../../assets/work_day_scheduler.PNG';
import password_generator from '../../assets/password_generator.PNG';
import fiscal_funhouse from '../../assets/fiscal_funhouse.PNG';
import code_quiz from '../../assets/code_quiz.PNG';
import note_taker from '../../assets/note_taker.PNG';
import git_hub from '../../assets/github-mark-white.png';
import costify from '../../assets/costify.PNG';
import { Container, Row, Col } from 'react-bootstrap';

function Portfolio() {
    return (
        <Container fluid style={{height: '88vh'}}>
            <Col>
                <Row style={{paddingBottom: '3vh', paddingTop: '2.5vh'}}>
                    <Col xs={4}>
                        <a href="https://ericklea.github.io/main-course-home-page-project/"><img style={{height: '35vh'}} src={main_course} alt="Main Course Project"/></a>
                        <a href="https://github.com/ericklea/main-course-home-page-project"><img style={{height: '7vh', paddingLeft: '3vh'}} src={git_hub} alt="Github Link"/></a>
                    </Col>
                    <Col xs={4}>
                        <a href="https://warm-river-76374-530a5c9b64cc.herokuapp.com/"><img style={{height: '35vh'}} src={costify} alt="Costify 2.0"/></a>
                        <a href="https://github.com/KeadenM/Costify2.0"><img style={{height: '7vh', paddingLeft: '3vh'}} src={git_hub} alt="Github Link"/></a>
                    </Col>
                    <Col xs={4}>
                        <a href="https://emill0004.github.io/03-JavaScript-Password-Generator/"><img style={{height: '35vh'}} src={password_generator} alt="Password Generator"/></a>
                        <a href="https://github.com/Emill0004/03-JavaScript-Password-Generator"><img style={{height: '7vh', paddingLeft: '3vh'}} src={git_hub} alt="Github Link"/></a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <a href="https://fiscal-funhouse.herokuapp.com/login"><img style={{height: '35vh'}} src={fiscal_funhouse} alt="Fiscal Funhouse"/></a>
                        <a href="https://github.com/dannyl2131/Fiscal_Funhouse"><img style={{height: '7vh', paddingLeft: '3vh'}} src={git_hub} alt="Github Link"/></a>
                    </Col>
                    <Col xs={4}>
                        <a href="https://emill0004.github.io/04-Web-APIs-Code-Game/"><img style={{height: '35vh'}} src={code_quiz} alt="Code Quiz"/></a>
                        <a href="https://github.com/Emill0004/04-Web-APIs-Code-Game"><img style={{height: '7vh', paddingLeft: '3vh'}} src={git_hub} alt="Github Link"/></a>
                    </Col>
                    <Col xs={4}>
                        <a href="https://agile-castle-87281-8de3b48131e7.herokuapp.com/"><img style={{height: '35vh'}} src={note_taker} alt="Note Taker"/></a>
                        <a href="https://github.com/Emill0004/11-Note-Taker"><img style={{height: '7vh', paddingLeft: '3vh'}} src={git_hub} alt="Github Link"/></a>
                    </Col>
                </Row>
            </Col>
            
        </Container>
    )
}

export default Portfolio;

/* 
        <div className='container-fluid'>
            <div>
                <a href="https://ericklea.github.io/main-course-home-page-project/"><img  src={main_course} alt="Main Course Project"/></a>
                <a href="https://github.com/ericklea/main-course-home-page-project"><img  src={git_hub} alt="Github Link"/></a>
            </div>
            <div>
                <a href="https://emill0004.github.io/05-Work-Day-Scheduler/"><img  src={work_day_scheduler} alt="Work Day Scheduler"/></a>
                <a href="https://github.com/Emill0004/05-Work-Day-Scheduler"><img  src={git_hub} alt="Github Link"/></a>
            </div>
            <div>
                <a href="https://emill0004.github.io/03-JavaScript-Password-Generator/"><img  src={password_generator} alt="Password Generator"/></a>
                <a href="https://github.com/Emill0004/03-JavaScript-Password-Generator"><img  src={git_hub} alt="Github Link"/></a>
            </div>
            <div>
                <a href="https://fiscal-funhouse.herokuapp.com/login"><img  src={fiscal_funhouse} alt="Fiscal Funhouse"/></a>
                <a href="https://github.com/dannyl2131/Fiscal_Funhouse"><img  src={git_hub} alt="Github Link"/></a>
            </div>
            <div>
                <a href="https://emill0004.github.io/04-Web-APIs-Code-Game/"><img  src={code_quiz} alt="Code Quiz"/></a>
                <a href="https://github.com/Emill0004/04-Web-APIs-Code-Game"><img  src={git_hub} alt="Github Link"/></a>
            </div>
            <div>
                <a href="https://agile-castle-87281-8de3b48131e7.herokuapp.com/"><img  src={note_taker} alt="Note Taker"/></a>
                <a href="https://github.com/Emill0004/11-Note-Taker"><img  src={git_hub} alt="Github Link"/></a>
            </div>
        </div>
*/