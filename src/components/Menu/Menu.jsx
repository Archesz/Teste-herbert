import React from 'react'
import './Menu.scss'

import logo from '../../assets/logo.png'

window.onscroll = function(){
    let posY = window.scrollY;
    let menu = document.querySelector("#menu");
    
    if(posY >= 40){
        menu.style.marginTop = '0px'
    } else if(posY < 40){
        menu.style.marginTop = '60px'
    } 

    else if(posY >= 700 && posY < 1200){

        menu.style.backgroundColor = "#3a3a3a"

    }
    
    // console.log(`Posição Y: ${window.scrollY}`)
}

function menuEnter(){
    alert('ok')
}

function Menu() {
    return (
        <div className='menu-container' id='menu'>
            
            <div className='logo'>
                <img src={logo} alt="Logo do Projeto Herbert de Souza" className='menu-logo'/>
            </div>

            <div className='menu-items'>
                <span className='menu-item' onClick={menuEnter}>Home</span>
                <span className='menu-item' onClick={menuEnter}>História</span>
                <span className='menu-item' onClick={menuEnter}>Projetos</span>
                <span className='menu-item' onClick={menuEnter}>Contato</span>
                <span className='menu-item' onClick={menuEnter}>Inscrição</span>
            </div>

        </div>
    )
}

export default Menu