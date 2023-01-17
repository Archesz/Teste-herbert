import React from 'react'
import './Button.scss'

function goToLink(site){
  if(site == "Matricula"){
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSfclXhY6Qn9ZSgqy8qtz5QsQjpbwZq-NgtAGmwBdpI7p7zhrg/viewform?usp=sf_link", "_blank")
  }
}

function Button(props) {
  if(props.function == "Matricula"){
    return (
      <button className={`btn ${props.style}`} onClick={() => {goToLink("Matricula")}}>
          {props.text}
      </button>
    )
  } else{
    return (
      <button className={`btn ${props.style}`} onClick={props.onClick}>
          {props.text}
      </button>
    )
  }
}

export default Button