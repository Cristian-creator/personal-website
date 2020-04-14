import React from 'react'
import Project from './Project'
import './Project.css'
import { Context } from '../../context'

export default function Projects() {
    const {projects} = React.useContext(Context);
    // console.log(projects.projects);
    return (
       <>
            <h1 className="projects-title"> projects portofolio </h1>
            <div className="projects">
                {
                    projects.map(project => <Project project={project} />)
                }
            </div>
        </>
    )
}
