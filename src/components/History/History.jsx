import React from 'react'
import './History.scss'

function History(props) {
    return (
        <div className='history-container'>
            
            <span className='history-depoiment'>
                "{props.depoimento}"
            </span>

            <div className='history-perfil'>
                
                <div className='history-left'>
                    <span className='history-university'>{props.universidade}</span>
                    <div className={`history-photo ${props.foto}`}/>
                    <span className="history-name">{props.nome}</span>
                    <span className='history-course'>{props.curso}</span>
                </div>

                <div className='history-right'>

                    "{props.depoimento}"

                </div>

            </div>

        </div>
    )
}

export default History