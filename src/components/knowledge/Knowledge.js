import React from 'react'
import './Knowledge.css'

import frontEnd from '../../img/window.png';
import server from '../../img/server.png';
import database from '../../img/database.png';

export default function Knowledge() {

    const knowledgeList = [
        { 
            title: 'front end',
            icon: frontEnd,
            // technologies: ['HTML5','CSS3 | SASS', 'Material UI', 'JavaScript | Typescript', 'React | Context API | Redux' ]
            technologies: ['Javascript | Typescript', 'CSS | SCSS', 'Material UI', 'ReactJS | NextJS', 'Context API | Redux']
        },
        {
            title: 'server',
            icon: server,
            technologies: ['NodeJS', 'Express', 'GraphQL', 'ORM']
        },
        {
            title: 'database',
            icon: database,
            technologies: ['MySQL', 'MongoDB', 'PostgreSQL']
        }
    ]

    return (
        <div className="knowledge-container">
            {
                knowledgeList.map((item, index) => (
                    <article key={index} className="card">
                        <img src={item.icon} alt={item.title} />
                        <h5> {item.title} </h5>
                        { item.technologies.map((tech, i) => (
                            <h6 key={i}> {tech} </h6>
                        )) 
                        }
                    </article>
                ))
            }
        </div>
    )
}
