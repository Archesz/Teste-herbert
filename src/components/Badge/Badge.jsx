import React from 'react'
import './Badge.scss'

import b from '../../assets/Background.png'

function Badge(props) {
    return (
        <div className='badge-container'>
            
            <span>{props.name}</span>
            <span></span>

        </div>
    )
}

export default Badge