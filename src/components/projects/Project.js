import React, { useState } from 'react'
import Hero from './Hero';
import './Project.css'
import StyledBackCard from './StyledBackCard';
import VerticallyModal from './VerticallyModal';

export default function Project({ project }) {
    const { title, used, heroImg, gif, backColor, demo, sourceCode } = project;

    const [open, setOpen] = useState(false);

    const toggleModal = () => {
        setOpen(!open);
    };

    return (
        <>
        <div className='project-card'>
            <div className="front">
                <img src={gif} alt="" className="gif"/>
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
                    {/* <Modal
                     isOpen={open} 
                     onRequestClose={toggleModal}
                     shouldCloseOnOverlayClick={true}
                     style={ customStyles }
                    //  overlayClassName="overlay"
                     >
                         <div className="modal">
                            <button onClick={toggleModal} className="close-modal" > close </button>
                            <div className="demo-img">
                                <img src={demo} alt="" />
                            </div>
                            <div className="demo-utils">
                                <h3> {title} </h3>
                                <a href={sourceCode}><button> Source Code </button> </a>
                            </div>
                         </div>
                    </Modal> */}
                   <VerticallyModal show={open} onHide={() => setOpen(false)} title={title} demo={demo} sourceCode={sourceCode} />
                </div> 
            </StyledBackCard>
        </div>
        </>
    )
}
