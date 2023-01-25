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
              
                <div className='projeto-imagem'>
                    <div className={`projeto-image ${props.id}`}/>
                </div>

                <div className='projeto-content'>
                    <span className='projeto-title'>{props.nome} </span>

                    <span className='projeto-author'>{props.autor}</span>

                    <span className='projeto-call'>{props.titulo}</span>

                    <span className='projeto-resume'>
                        {props.descricao}
                    </span>
                </div>

                <Button style="full big btnConhecer" text="Conhecer"/>

          </div>

      )
}

export default Projeto