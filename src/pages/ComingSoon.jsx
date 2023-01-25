import React from 'react'
import Faixa from '../components/Faixa/Faixa'
import Menu from '../components/Menu/Menu'
import '../styles/global.scss'

function ComingSoon() {
    return (
        <div className='container-coming'>
            <Faixa />
            <Menu />
            <div className='coming-content'>
                <span>Essa página está em construção, em breve poderá acessa-la!</span>
            </div>
        </div>
    )
}

export default ComingSoon