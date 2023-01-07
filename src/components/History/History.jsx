import React from 'react'
import './History.scss'

function History(props) {
    return (
        <div className='history-container'>
            
            <span className='history-depoiment'>
                "{props.depoimento}"
            </span>

            <div className='history-perfil'>
                <div className='history-photo'></div>

                <div className='history-text'>
                    <span className="history-name">{props.nome}</span>
                    <span className='history-course'>{props.curso}</span>
                    <span className='history-university'>{props.universidade}</span>
                </div>
            </div>

        </div>
    )
}

export default History