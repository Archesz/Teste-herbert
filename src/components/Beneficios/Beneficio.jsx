import React from 'react'
import './Beneficio.scss'

function Beneficio(props) {
    return (
        <div className='beneficio-container'>
            <span className='beneficio-title'>{props.title}</span>
            <span className='beneficio-resume'>{props.text}</span>
        </div>
    )
}

export default Beneficio