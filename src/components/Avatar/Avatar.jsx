import React from 'react'
import './Avatar.scss'

function Avatar(props){
    return (
        <div className='avatar-container'>
            
            <img src={props.photo} alt="" className='avatar-photo'/>
            
            <span className='avatar-name'>
                {props.name}
            </span>

        </div>
    )
}

export default Avatar