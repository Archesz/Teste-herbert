import React from 'react'
import Button from '../Button/Button'

function Banner(props){
  return (
    <div className='banner-container'>
        
        <span className='banner-title'>Educação, Sociedade e Tecnologia</span>
        <span className='banner-cta'>Não é só sobre o Vestibular.</span>
        <span className='banner-text'>
            O Herbert oferece diversas atividades educacionais, culturais e tecnologicas para a comunidade
            que o cerca. Oferecendo cursos como educação infantil, programação, reforço para concursos,
            aulas de artes, eventos e muito mais! 
            Não deixe de conferir nossa agenda de eventos e projetos.
        </span>

        <Button text="Projetos" style="full big"/>

    </div>
  )
}

export default Banner