import React from 'react';
import pfp from '../../assets/pfp.jpg';

function AboutMe() {
    return (
        <div className="container-fluid">
            <img className="pfp" src={pfp} alt="me on a cow bench"/>
            <h3 className="content">ABOUT ME</h3>
            <p className="content">
                My name is Eric Miller, I graduated from Innovations Early College High School in 2022 and jumped 
                right into The Coding Bootcamp with hopes of starting a career in the tech world.
            </p>
        </div>
        
    )
}

export default AboutMe;