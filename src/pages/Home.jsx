import React from 'react'
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
import etec from '../assets/etec.jpg'

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
                        <Button text="Conhecer" style="outline big"/>
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

                    <Beneficio title="Excelência de Professores" text="Corpo docente altamente qualificado e experiente, com professores experientes, atenciosos e com vivência universitária à compartilhar."/>
                    <Beneficio title="Suporte e Atenção" text="Foco no suporte individual e independente para diferentes turmas e alunos, fortalecendo seus pontos fortes e auxiliar os pontos fracos."/>
                    <Beneficio title="Educação Humanizada" text="Valorizar a particuridade, debates e um ambiente social e não competitivo, garantindo qualidade de educação e vivência."/>

                </div>

                <Button text="Entrar agora!" style="full big round long"  function="Matricula"/>

            </div>

            <div className='home-mid'>

                <div className='home-mid-content'>
                    <span className='text-call'>Lute conosco.</span>
                    <span className='home-mid-title'>Seu <span className='red'>lugar</span> é na <span className='red'>Universidade!</span></span>
                    <span className='home-mid-text'>
                        O <span className='bolder'>Projeto Herbert de Souza</span> visa muito mais do que apenas aprovação no vestibular, buscamos incentivar o pensamento e senso crítico nos estudantes e fornecer ass ferramentas para que possam buscar seus objetivos individuais e coletivos.
                    </span>
                    <span className='text-call'>Seu lugar está aqui:</span>

                    <div className='logos-universidades'>

                        <div className='row'>
                            <img src={usp} className="logo-universidade large" alt="" />
                            <img src={unicamp} className="logo-universidade" alt="" />
                            <img src={ufscar} className="logo-universidade" alt="" />
                        </div>

                        <div className='row'>
                            <img src={enem} className="logo-universidade large" alt="" />
                            <img src={cotuca} className="logo-universidade" alt="" />
                            <img src={etec} className="logo-universidade" alt="" />                        
                        </div>

                    </div>

                    <span className='text-call'>E muito mais.</span>
                    
                    <span className='home-mid-text'>
                        Nossa história é desenhada por lutas e objetivos extensos, onde cada estudante, professor ou colaborador escreva uma nova página sobre o futuro do projeto, conheça nossa história e escreva sua página também.
                    </span>

                    <Button text="Conhecer" style="outline big mt-4"/>
                </div>

            </div>            

            <div className='home-projects'>
                
                <div className='projects-first'>
                    
                    <img src={herbertLogo} className="logo-projects"/>

                    <span className='projects-title'>Para Todos</span>
                    <span className='projects-resume'>
                        O Herbert não é apenas um projeto para vestibulares, buscamos impactar
                        áreas importantes de nossa comunidade e fornecer o máximo de apoio
                        através de divulgação cultural, educacional, tecnológica, entre outros projetos. 
                    </span>

                    <span className='projects-resume'>
                        Confira alguns dos nossos projetos realizados que podem retornar a qualquer momento. 
                    </span>

                    <span className='projects-resume'>
                        (Clique e veja mais sobre)
                    </span>

                    <Carousel />

                    <Button text="Projetos" style="outline big mt-4"/>

                </div>

            </div>

            <div className='home-midbot'>

                <div className='home-history'>
                    <span className='history-name'>Herbert Baobá</span>
                    <span className='history-title'>Mudar o presente para construirmos as raízes do futuro!</span>
                    <span className='history-subtitle'>Não são apenas números, cada nova pessoa que passa pelo Herbert deixa sua marca e sua história. Usamos essas histórias para construirmos raízes fortes para o futuro! </span>
                    <span className='history-instruct'>Passe o mouse ou Clique sobre os cards para ler um pouco de quem passou por aqui.</span>
                </div>

                <div className='historys-field'>

                    <span className='history-span'>Algumas de nossas sementes</span>

                    {depoiments.map((depoiment, index) => {
                        if(index < 3){
                            return(
                                <History nome={depoiment["Nome"]} universidade={depoiment["Universidade"]} curso={depoiment["Curso"]} depoimento={depoiment["Depoimento"]}/>
                            )
                        }
                    })}

                </div>

                <span className='more'>Ver todos</span>

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