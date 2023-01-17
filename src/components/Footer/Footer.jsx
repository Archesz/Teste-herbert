import React from 'react'
import './Footer.scss'
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp} from 'react-icons/fa'
import logoSimp from '../../assets/logoSimp.png'

function goToSocial(rede){
    if(rede == "Website"){
        window.open("./")
    }else if(rede == "Instagram"){
        window.open("https://www.instagram.com/cursinhoherbertdesouza/", "_blank")
    } else if(rede == "Whatsapp"){
        window.open("http://api.whatsapp.com/send?1=pt_BR&phone=5519989809272", "_blank")
    } else if(rede == "Facebook"){
        window.open("https://www.facebook.com/herbert.desouza.963", "_blank")
    } else if(rede == "Linkedin"){
        window.open("https://www.linkedin.com/", "_blank")
    } else if(rede == "Youtube"){
        window.open("https://www.youtube.com", "_blank")
    }
}

function goToLink(site){
    if(site == "Matricula"){
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfclXhY6Qn9ZSgqy8qtz5QsQjpbwZq-NgtAGmwBdpI7p7zhrg/viewform?usp=sf_link", "_blank")
    }
}

function Footer() {
    return (

        <div className='rodape'>

            <img src={logoSimp} className='social-img' onClick={() => { goToSocial("Website") }} />
            <FaFacebookF className='social' onClick={() => { goToSocial("Facebook") }} />
            <FaWhatsapp className='social' onClick={() => { goToSocial("Whatsapp") }} />
            <FaInstagram className='social' onClick={() => { goToSocial("Instagram") }} />
            <FaLinkedinIn className='social' onClick={() => { goToSocial("Linkedin") }} />
            <FaYoutube className="social" onClick={() => { goToSocial("Youtube") }} />

        </div>

    )
}

export default Footer