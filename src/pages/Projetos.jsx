import React from 'react'
import Faixa from '../components/Faixa/Faixa'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'
import Projeto from '../components/Projeto/Projeto'
import Button from '../components/Button/Button'
import '../styles/projetos.scss'

import projetos from '../Data/projetos.json'
const ProjetosData = projetos["Projetos"]

function Projetos() {
  return (
    <div className='container'>
      <Faixa />
      <Menu />

      <div className='projetos-content'>

        <h1 className='projetos-title'>Projetos</h1>

        {ProjetosData.map((projeto) => {
          return(
            <Projeto status={projeto["Status"]} nome={projeto["Nome"]} descricao={projeto["Descrição"]}/>
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

export default Projetos