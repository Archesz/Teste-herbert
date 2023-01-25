import React, {useState} from 'react'
import Menu from '../components/Menu/Menu'
import '../styles/home.scss'

import boy from '../assets/blackboy.png'
import resist from '../assets/DecorationMid.png'
import logoSimp from '../assets/logoSimp.png'

import unicamp from '../assets/unicamp.png'
import usp from '../assets/usp.png'
import ufscar from '../assets/ufscar.png'
import enem from '../assets/enem.png'
import cotuca from '../assets/cotuca.png'
import unesp from '../assets/unesp-logo.png'
import federal from '../assets/if.png'
import herbertLogo from '../assets/herbertLogo.png'

import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import Faixa from '../components/Faixa/Faixa'
import History from '../components/History/History'
import Carousel from '../components/Slider/Carousel'
import Badge from '../components/Badge/Badge'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import Social from '../components/Social/Social'
import Beneficio from '../components/Beneficios/Beneficio'

// Icons
import {AiFillCheckCircle} from 'react-icons/ai'

// Dados
import Depoiments from '../Data/depoiments.json'
import Footer from '../components/Footer/Footer'
const depoiments = Depoiments["Home"]


// Funções

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

let n = 3

if(window.screen.width < 500){
    n = 3
} else if(window.screen.width >= 500 && window.screen.width < 800){
    n = 2
} else{
    n = 4
}

function Home() {
    
    return (
        <div className='container'>
            
            <Faixa />

            <Menu />

            <div className='home-top'>
                
                <div className='home-top-content'>

                    <span className='home-call'>"Pela difusão do pensamento crítico."</span>
                    <span className='home-title'>A educação é o nosso maior instrumento de luta. Venha lutar conosco!</span>
                    <span className='home-subtitle'>Prezamos por um ensino, educação e convivência de qualidade para que juntos possamos conquistar nossos espaços.</span>

                    <div className='home-top-buttons'>
                        <Button text="Inscrever-se" style="full big" function="Matricula"/>
                        <Button text="Conhecer" style="outline big" onClick={() => window.location.assign('./historia')}/>
                    </div>

                </div>

                <div className='home-top-img'>
                    <img src={boy} className="home-img" alt="" />
                    <div className='square'></div>
                </div>

            </div>
            
            <div className='beneficios'>

                <div className='beneficios-card'>
                    <span className='beneficio-title'>Não se sente preparado? Vem com a gente!</span>
    
                    <div className='beneficios-list'>
                        <span className='beneficio-item'><AiFillCheckCircle className="check"/>Aulas de segunda à sexta</span>
                        <span className='beneficio-item'><AiFillCheckCircle className="check"/>Plantões e Aulas de Reforço</span>
                        <span className='beneficio-item'><AiFillCheckCircle className="check"/>Simulados</span>
                        <span className='beneficio-item'><AiFillCheckCircle className="check"/>Material Didático</span>
                    </div>
                </div>

                <div className='cards-beneficios'>

                    <Beneficio title="Adaptabilidade" text="Acreditamos que o ensino deve ser adaptado e atualizado conforme a sociedade caminha, utilizando novas abordagens e tecnologias disponíveis."/>
                    <Beneficio title="Suporte" text="Foco no suporte individual e independente para diferentes turmas e alunos, fortalecendo seus pontos fortes e auxiliar os pontos fracos."/>
                    <Beneficio title="Educação Humanizada" text="Valorizar a particuridade, debates e um ambiente social e não competitivo, garantindo qualidade de educação e vivência."/>

                </div>

                <Button text="Entrar agora!" style="full big round long"  function="Matricula"/>

            </div>

            <div className='home-mid'>

                <div className='home-mid-content'>
                    <span className='text-call'>Lute conosco.</span>
                    <span className='home-mid-title'>Seu <span className='red-letter'>lugar</span> é na <span className='red-letter'>Universidade!</span></span>
                    <span className='home-mid-text'>
                        O <span className='bolder'>Projeto Herbert de Souza</span> visa muito mais do que apenas aprovação no vestibular, buscamos incentivar o pensamento e senso crítico nos estudantes e fornecer as ferramentas para que possam buscar seus objetivos individuais e coletivos.
                    </span>
                    <span className='text-call'>Seu lugar está aqui:</span>

                    <div className='logos-universidades'>

                        <div className='row'>
                            <img src={usp} className="logo-universidade large" alt="" />
                            <img src={unicamp} className="logo-universidade" alt="" />
                            <img src={federal} className="logo-universidade" alt="" />
                        </div>

                        <div className='row'>
                            <img src={enem} className="logo-universidade large" alt="" />
                            <img src={unesp} className="logo-universidade large" alt="" />                        
                            <img src={cotuca} className="logo-universidade" alt="" />
                        </div>

                    </div>

                    <span className='text-call'>E muito mais.</span>
                    
                    <span className='home-mid-text'>
                        Nossa história é desenhada por lutas e objetivos extensos, onde cada estudante, professor ou colaborador escreve uma nova página sobre o futuro do projeto. Conheça nossa história e escreva sua página também.
                    </span>

                    <Button text="Conhecer" style="outline big mt-4" onClick={() => window.location.assign('./historia')}/>
                </div>

            </div>            

            <div className='home-projects'>
                
                <div className='projects-first'>
                    
                    <img src={herbertLogo} className="logo-projects"/>

                    <span className='projects-title'>Para Todos</span>
                    <span className='projects-resume'>
                        O Herbert não é apenas um curso preparatório para vestibulares e vestibulinhos, buscamos impactar
                        áreas importantes de nossa comunidade e fornecer o máximo de apoio
                        através de divulgação cultural, educacional, tecnológica, entre outros. 
                    </span>

                    <span className='projects-resume'>
                        Confira alguns dos nossos projetos realizados que podem retornar a qualquer momento. 
                    </span>

                    <div className='projects-cards'>
                        <ProjectCard class="tech" title="Programação" />
                        <ProjectCard class="saude" title="Educação e Saúde"/>
                        <ProjectCard class="podcast" title="Música e Arte"/>
                        <ProjectCard class="solo" title="Nosso Solo"/>
                    </div>

                    <Button text="Projetos" style="outline big mt-6" onClick={() => window.location.assign('./projetos')}/>

                </div>

            </div>

            <div className='home-midbot'>

                <div className='home-history'>
                    <span className='history-name'>Herbert Baobá</span>
                    <span className='history-title'>Mudar o presente para construirmos as raízes do futuro!</span>
                    <span className='history-subtitle'>Não são apenas números, cada nova pessoa que passa pelo Herbert deixa sua marca e sua história. Usamos essas histórias para construirmos raízes fortes para o futuro! </span>
                </div>

                <div className='historys-field'>
                    
                    {depoiments.map((depoiment, index) => {
                        if(index < n){
                            return(
                                <History nome={depoiment["Nome"]} universidade={depoiment["Universidade"]} curso={depoiment["Curso"]} depoimento={depoiment["Depoimento"]} foto={depoiment["Foto"]}/>
                            )
                        }
                    })}

                </div>

                <span className='more' onClick={() => {window.location.assign('./construcao')}}>Ver todos</span>

            </div>

            <div className='faixa-end'>
                    
                <span className='faixa-end-name'>Qual foi? Vai deixar mesmo essa oportunidade passar?</span>
                
                <Button text="Inscrever-se!" style="full big black" function="Matricula"/>

            </div>

            <Footer />
            
        </div>
    )
}

export default Home