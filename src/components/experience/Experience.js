import React from 'react'
import jsIcon from '../../img/icons8-javascript-48.png';
import nodeIcon from '../../img/nodejs.png';
import react from '../../img/react.png';

import './Experience.css';


export default function Experience() {
    return (
        <div className="experience-container"> 
            <section className="title">
                <h1>front end focused</h1>
                <h1> with full stack experience </h1>
            </section>
            <div className="experience-flex">
                <section className="experience-description">
                    <h3> motivated to produce results </h3>
                    <p> As a tenacious self-taught programmer, I use continous iteration to produce results quickly and continuously improve products.  </p>
                    <h3> an agile collaborator </h3>
                    {/* contributed to open source projects, worked in teams, */}
                    <p> Considering my experience, I can provide fast and realiable solutions, I like challenges and always stay attuned to <u> learning new things and share ideas</u>. </p>
                </section>
                <section className="icons">
                    <img src={jsIcon} alt='javascript'  />
                    <img src={nodeIcon} alt='nodejs' />
                    <img src={react} alt='react' />
                </section>
            </div>
        </div>
    )
}
