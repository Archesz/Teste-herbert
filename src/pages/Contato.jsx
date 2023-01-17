import React from 'react'
import Faixa from '../components/Faixa/Faixa'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp} from 'react-icons/fa'
import '../styles/contato.scss'
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

function Contato() {
  return (
    <div className='container'>
      
      <Faixa />
      <Menu />

      <div className='content'>
        <h2>Dúvidas, comentários ou gostariar de conhecer mais? Entre em contato:</h2>

        <div className='row'>
            <FaFacebookF className='social' onClick={() => { goToSocial("Facebook") }} />
            <FaWhatsapp className='social' onClick={() => { goToSocial("Whatsapp") }} />
            <FaInstagram className='social' onClick={() => { goToSocial("Instagram") }} />
            <FaLinkedinIn className='social' onClick={() => { goToSocial("Linkedin") }} />
            <FaYoutube className="social" onClick={() => { goToSocial("Youtube") }} />
        </div>

      </div>

      <div>
        <h2>Estamos esperando você aqui:</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.198326739173!2d-47.12104704949066!3d-22.94292198491982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c836633d9479%3A0xf30972041c1f6da5!2sProjeto%20Hebert%20de%20Souza!5e0!3m2!1spt-BR!2sbr!4v1673977382246!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mapa'></iframe>
      </div>

      <Footer />

    </div>
  )
}

export default Contato