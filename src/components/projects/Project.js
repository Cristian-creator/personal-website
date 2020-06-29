import React, { useState } from 'react'
import Hero from './Hero';
import './Project.css'
import StyledBackCard from './StyledBackCard';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        // right                 : 'auto',
        // bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        maxWidth: '90%',
        minHeight: '600px',
        height: 'auto',
        overflow: 'hidden'
    }
};

// Modal.setAppElement('#yourAppElement');

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
                    <button className="demo" onClick={toggleModal}> Demo </button>
                    <Modal
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
                                <a href={sourceCode} target="_blank"><button> Source Code </button> </a>
                            </div>
                         </div>
                    </Modal>
                </div> 
            </StyledBackCard>
        </div>
        </>
    )
}
