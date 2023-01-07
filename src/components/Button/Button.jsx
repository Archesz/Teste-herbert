import React from 'react'
import './Button.scss'

function Button(props) {
  return (
    <button className={`btn ${props.style}`} onClick={props.onClick}>
        {props.text}
    </button>
  )
}

export default Button