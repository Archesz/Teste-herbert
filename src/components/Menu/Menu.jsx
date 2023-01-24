import React, {useState} from 'react'
import './Menu.scss'

import logo from '../../assets/logo.png'

import {AiOutlineMenu} from 'react-icons/ai'

window.onscroll = function(){
    let posY = window.scrollY;
    let menu = document.querySelector("#menu");
    
    if(posY >= 40){
        menu.style.marginTop = '0px'
    } else if(posY < 60){
        menu.style.marginTop = '80px'
    } 

    else if(posY >= 700 && posY < 1200){

        menu.style.backgroundColor = "#3a3a3a"

    }
    
    // console.log(`Posição Y: ${window.scrollY}`)
}

function goToPage(page){
    if(page == "Home"){
        window.location.assign('./')
    }

    if(page == "About"){
        window.location.assign('./historia')
    }

    if(page == "Projetos"){
        window.location.assign('./projetos')
    }

    if(page == "Contato"){
        window.location.assign('./contato')
    }

    if(page == "Matricula"){
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfclXhY6Qn9ZSgqy8qtz5QsQjpbwZq-NgtAGmwBdpI7p7zhrg/viewform?usp=sf_link", "_blank")
    }
}

function Menu() {

    const [statusMenu, setStatusMenu] = useState("hide")

    function openMenu(){
        let mobile = document.querySelector("#menu-mobile")
        let menu = document.querySelector("#menu-mobile-items")
        
        if(statusMenu == "hide"){
    
            mobile.classList.toggle("animation-extend")
            
            setTimeout(() => {
                mobile.classList.toggle("menu-extend")
            }, 390);

            setTimeout(() => {
                menu.classList.toggle("menu-view")
                menu.classList.toggle("menu-noview")

            }, 400);
    
            setStatusMenu("show")
        } else{
            mobile.classList.toggle("animation-hide")

            setTimeout(() => {
                mobile.classList.toggle("menu-hide")
            }, 390);

            setTimeout(() => {
                menu.classList.toggle("menu-view")
                menu.classList.toggle("menu-noview")

            }, 400);
        }
    
    }

    return (
        <div className='menu-container' id='menu'>
            
            <div className='menu-padding'>

                <div className='logo'>
                    <img src={logo} alt="Logo do Projeto Herbert de Souza" className='menu-logo'/>
                </div>

                <div className='menu-items'>
                    <span className='menu-item' onClick={() => {goToPage("Home")}}>Home</span>
                    <span className='menu-item' onClick={() => {goToPage("About")}}>História</span>
                    <span className='menu-item' onClick={() => {goToPage("Projetos")}}>Projetos</span>
                    <span className='menu-item' onClick={() => {goToPage("Contato")}}>Contato</span>
                    <span className='menu-item' onClick={() => {goToPage("Matricula")}}>Inscrição</span>
                </div>


                <AiOutlineMenu className="menu-items-mobile" onClick={openMenu}/>

            </div>

            <div className='menu-mobile' id="menu-mobile">

                <div className='menu-mobile-items menu-noview' id="menu-mobile-items">
                    <span className='menu-item' onClick={() => {goToPage("Home")}}>Home</span>
                    <span className='menu-item' onClick={() => {goToPage("About")}}>História</span>
                    <span className='menu-item' onClick={() => {goToPage("Projetos")}}>Projetos</span>
                    <span className='menu-item' onClick={() => {goToPage("Contato")}}>Contato</span>
                    <span className='menu-item' onClick={() => {goToPage("Matricula")}}>Inscrição</span>
                </div>

            </div>
        </div>
    )
}

export default Menu