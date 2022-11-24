import React from 'react'
import Project from './Project'
import './Project.css'
import { Context } from '../../context'

const Projects = () => {
    const { projects } = React.useContext(Context);

    return (
       <>
            <h1 className="projects-title"> projects portfolio </h1>
            <div className="projects">
                {
                    projects.map(project => <Project key={project.title} project={project} />)
                }
            </div>
        </>
    )
}

export default Projects;
