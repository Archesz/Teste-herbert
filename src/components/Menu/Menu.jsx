import React from 'react'
import './Menu.scss'

import logo from '../../assets/logo.png'

window.onscroll = function(){
    let posY = window.scrollY;
    let menu = document.querySelector("#menu");
    let items = Array.from(document.querySelectorAll(".menu-item"))
    
    if(posY >= 40){
        menu.style.marginTop = '0px'
    } else if(posY < 40){
        menu.style.marginTop = '60px'
    } 

    if(posY < 700){
        items.map((item) => {
            item.style.color = 'white'
        })
    }

    else if(posY >= 700 && posY < 1200){

        menu.style.backgroundColor = "#3a3a3a"

    }
    
    // console.log(`Posição Y: ${window.scrollY}`)
}

function Menu() {
    return (
        <div className='menu-container' id='menu'>
            
            <div className='logo'>
                <img src={logo} alt="Logo do Projeto Herbert de Souza" className='menu-logo'/>
            </div>

            <div className='menu-items'>
                <span className='menu-item'>Home</span>
                <span className='menu-item'>Projetos</span>
                <span className='menu-item'>História</span>
                <span className='menu-item'>Contato</span>
                <span className='menu-item'>Inscrição</span>
            </div>

        </div>
    )
}

export default Menu