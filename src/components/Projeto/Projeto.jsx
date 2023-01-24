import React from 'react'
import Button from '../Button/Button'
import './Projeto.scss'
function Projeto(props){

    let i = "";
    if(props.index % 2 == 0){
        i = "even"
    } else{
        i = "odd"
    }

    return (

          <div className={`projeto ${i}`}>
              <div className={`projeto-image ${props.id}`}/>

              <span className='projeto-title'>{props.nome} </span>

              <span className='projeto-author'>{props.autor}</span>

              <span className='projeto-call'>{props.titulo}</span>

              <span className='projeto-resume'>
                {props.descricao}
              </span>

              <Button style="full big as-center" text="Conhecer"/>
          </div>

      )
}

export default Projeto