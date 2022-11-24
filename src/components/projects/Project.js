import React, { useState } from 'react'
import Hero from './Hero';
import './Project.css'
import StyledBackCard from './StyledBackCard';
import TransitionsModal from './TransitionsModal';

export default function Project({ project }) {
    const { title, used, heroImg, gif, backColor, demo, sourceCode, live } = project;

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='project-card'>
                <div className="front">
                    { gif && <img src={gif} alt="" className="gif"/> }
                    <Hero image={heroImg}>
                        <h2 className="title"> <span> {title} </span> </h2>
                    </Hero>
                    {
                        used.map((use, index) => (
                            <h6 key={index}> {use} </h6>
                        ))
                    }
                </div>
                <StyledBackCard backColor={backColor} className="back">
                    <div className="back-content">
                        <button className="demo" onClick={() => setOpen(true)}> Demo </button>
                        <TransitionsModal show={open} onHide={() => setOpen(false)} title={title} demo={demo} sourceCode={sourceCode} live={live} />
                    </div> 
                </StyledBackCard>
            </div>
        </>
    )
}
