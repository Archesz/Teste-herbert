import React from 'react'
import './Footer.scss'
import {FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp} from 'react-icons/fa'
import {AiFillPhone, AiOutlineMail} from 'react-icons/ai'
import { BiMapAlt, BiTimeFive } from 'react-icons/bi'
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
        window.open("https://www.youtube.com/@cursinhopre-vestibularherb6873", "_blank")
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
            
            <div className='rodape-img'>
                <img src={logoSimp} className='social-img' onClick={() => { goToSocial("Website") }} />
                
                <div className='social-field'>
                    <FaFacebookF className='social' onClick={() => { goToSocial("Facebook") }} />
                    <FaWhatsapp className='social' onClick={() => { goToSocial("Whatsapp") }} />
                    <FaInstagram className='social' onClick={() => { goToSocial("Instagram") }} />
                    <FaYoutube className="social" onClick={() => { goToSocial("Youtube") }} />
                </div>

            </div>

            <div className='rodape-content'>

                <div className='footer-institucional'>
                    <span className='footer-title'>Institucional</span>
                    <a className='footer-link'>Home</a>
                    <a className='footer-link'>Projetos</a>
                    <a className='footer-link'>História</a>
                    <a className='footer-link'>Contato</a>
                    <a className='footer-link'>Linktree</a>
                </div>

                <div className='footer-contato'>
                    <span className='footer-title'>Contato</span>
                    <div className='footer-contato-line'><AiFillPhone className='icone'/>
                        <span className='footer-info'>(19) 98980-9272</span>
                    </div>
                    <div className='footer-contato-line'><AiOutlineMail className='icone'/>
                        <span className='footer-info'>cursinhoherbert@gmail.com</span>
                    </div>
                    <div className='footer-contato-line'><BiMapAlt className='icone'/>
                        <span className='footer-info'>R. Dusolina Leone Tournieux, 249 - Parque Res. Vila União, Campinas - SP.</span>
                    </div>
                    <div className='footer-contato-line'><BiTimeFive className='icone'/>
                        <span className='footer-info'>Segunda a Sexta feira: 08:00 às 22:30</span>
                    </div>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.198326739173!2d-47.12104704949066!3d-22.94292198491982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c836633d9479%3A0xf30972041c1f6da5!2sProjeto%20Hebert%20de%20Souza!5e0!3m2!1spt-BR!2sbr!4v1673977382246!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map'></iframe>
            </div>

            
            <div className='footer-assinatura'>
                Desenvolvido por <a className='footer-linktree' href="https://linktr.ee/Archsz">@Archs</a>
            </div>

        </div>

    )
}

export default Footer