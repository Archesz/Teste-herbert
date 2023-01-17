import React from 'react'
import Faixa from '../components/Faixa/Faixa'
import Footer from '../components/Footer/Footer'
import Button from '../components/Button/Button'

import History from '../components/History/History'
import Menu from '../components/Menu/Menu'
import depoiments from '../Data/depoiments.json'

import '../styles/aprovados.scss'

const Depoiments = depoiments["Home"]

function Aprovados() {
  return (
    <div className='container-aprovados'>
        <Faixa />
        <Menu />
        
        <div className='content-aprovados'>
            <span className='history-span'>Algumas de nossas sementes</span>        
            {Depoiments.map((depoiment, index) => {
                return(
                        <History nome={depoiment["Nome"]} universidade={depoiment["Universidade"]} curso={depoiment["Curso"]} depoimento={depoiment["Depoimento"]}/>
                )
            })}
        </div>

        <div className='faixa-end'>
                        
            <span className='faixa-end-name'>Venha fazer parte desse universo Herbertiano!</span>
                    
            <Button text="Inscrever-se!" style="full big black" function="Matricula"/>

        </div>

        <Footer />
    </div>
  )
}

export default Aprovados