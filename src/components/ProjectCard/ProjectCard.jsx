import React from 'react'
import './ProjectCard.scss'


function ProjectCard(props) {
    return (
        <div className={`project-card ${props.class}`}>
            <div className='project-cape'>
                <span className='project-name'>{props.n}</span>
                <span className='project-name'>
                    {props.title}
                </span>
            </div>
        </div>    
    )
}

export default ProjectCard