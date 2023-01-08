import React from 'react'
import './ProjectCard.scss'


function ProjectCard(props) {
    return (
        <div className='project-card'>
            <div className='project-cape'>
                
                <span className='project-name'>
                    {props.name}
                </span>
            </div>
        </div>    
    )
}

export default ProjectCard