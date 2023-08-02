import React from 'react';
import main_course from '../../assets/main_course.png';
import work_day_scheduler from '../../assets/work_day_scheduler.PNG';
import password_generator from '../../assets/password_generator.PNG';
import fiscal_funhouse from '../../assets/fiscal_funhouse.PNG';
import code_quiz from '../../assets/code_quiz.PNG';
import note_taker from '../../assets/note_taker.PNG';
import git_hub from '../../assets/github-mark-white.png';

function Portfolio() {
    return (
        <div className='container-fluid'>
            <div>
                <a href="https://ericklea.github.io/main-course-home-page-project/"><img className="appImg" src={main_course} alt="Main Course Project"/></a>
                <a href="https://github.com/ericklea/main-course-home-page-project"><img className="github" src={git_hub} alt="Github Link"/></a>
            </div>
            <div>
                <a href="https://emill0004.github.io/05-Work-Day-Scheduler/"><img className="appImg" src={work_day_scheduler} alt="Work Day Scheduler"/></a>
                <a href="https://github.com/Emill0004/05-Work-Day-Scheduler"><img className="github" src={git_hub} alt="Github Link"/></a>
            </div>
            <div>
                <a href="https://emill0004.github.io/03-JavaScript-Password-Generator/"><img className="appImg" src={password_generator} alt="Password Generator"/></a>
                <a href="https://github.com/Emill0004/03-JavaScript-Password-Generator"><img className="github" src={git_hub} alt="Github Link"/></a>
            </div>
            <div>
                <a href="https://fiscal-funhouse.herokuapp.com/login"><img className="appImg" src={fiscal_funhouse} alt="Fiscal Funhouse"/></a>
                <a href="https://github.com/dannyl2131/Fiscal_Funhouse"><img className="github" src={git_hub} alt="Github Link"/></a>
            </div>
            <div>
                <a href="https://emill0004.github.io/04-Web-APIs-Code-Game/"><img className="appImg" src={code_quiz} alt="Code Quiz"/></a>
                <a href="https://github.com/Emill0004/04-Web-APIs-Code-Game"><img className="github" src={git_hub} alt="Github Link"/></a>
            </div>
            <div>
                <a href="https://agile-castle-87281-8de3b48131e7.herokuapp.com/"><img className="appImg" src={note_taker} alt="Note Taker"/></a>
                <a href="https://github.com/Emill0004/11-Note-Taker"><img className="github" src={git_hub} alt="Github Link"/></a>
            </div>
        </div>
        
    )
}

export default Portfolio;