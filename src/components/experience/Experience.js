import React from 'react'
import jsIcon from '../../img/experience/js.png';
import nodeIcon from '../../img/experience/nodejs.png';
import react from '../../img/experience/react.png';

import './Experience.css';

const Experience = () => {
    return (
        <div className="experience-container"> 
            <section className="title">
                <h1>front end focused</h1>
                <h1> with full stack experience </h1>
            </section>
            <div className="experience-flex">
                <section className="experience-description">
                    <h3> motivated to produce results </h3>
                    <p> Curiosity, imagination and innovation have always brought me fun and pleasure in implementing various ideas, reproducing websites or applications. </p>
                    {/* <p> As a tenacious self-taught programmer, I use repetitive iteration to produce results quickly and continuously improve products.  </p> */}
                    <h3> a good collaborator </h3>
                    <p> Considering my experience, I can provide fast and realiable solutions, I like challenges and always stay attuned to learning new things and share ideas. </p>
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

export default Experience;