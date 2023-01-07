import React from 'react';
import './Card.scss'

function Card(props) {
  return (
    <div className="card">
      <img src={props.icon} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;