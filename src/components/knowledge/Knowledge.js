import React from 'react'
import './Knowledge.css'

import frontEnd from '../../img/knowledge/window.png';
import server from '../../img/knowledge/server.png';
import database from '../../img/knowledge/database.png';

const Knowledge = () => {

    const knowledgeList = [
        { 
            title: 'front end',
            icon: frontEnd,
            technologies: ['Javascript | Typescript', 'CSS |  Material UI', 'Jest', 'ReactJS | NextJS', 'Context API | Redux']
        },
        {
            title: 'server',
            icon: server,
            technologies: ['Javascript | Typescript', 'NodeJS', 'Express | NestJS', 'Jest', 'GraphQL']
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

export default Knowledge;
