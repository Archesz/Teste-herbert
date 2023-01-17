import React from 'react'
import './Projeto.scss'
function Projeto(props){
  return (

        <div className='projeto'>
            <div className='projeto-row'>
                <span className='projeto-title'>{props.nome} </span>
                <div className={`status ${props.status}`}></div>
            </div>

            <img src="" alt="" className='projeto-image'/>

            <span className='projeto-resume'>{props.descricao}</span>
        </div>
    
    )
}

export default Projeto