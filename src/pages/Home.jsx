import React from 'react'
import Menu from '../components/Menu/Menu'
import '../styles/home.scss'

import boy from '../assets/blackboy.png'
import resist from '../assets/DecorationMid.png'

import unicamp from '../assets/unicamp.png'
import usp from '../assets/usp.png'
import ufscar from '../assets/ufscar.png'
import enem from '../assets/enem.png'
import cotuca from '../assets/cotuca.png'
import etec from '../assets/etec.jpg'
import foto from '../assets/cotuca.png'

import herbertLogo from '../assets/herbertLogo.png'

import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import Faixa from '../components/Faixa/Faixa'
import History from '../components/History/History'

// Dados

import Depoiments from '../Data/depoiments.json'
import Badge from '../components/Badge/Badge'
import ProjectCard from '../components/ProjectCard/ProjectCard'

const depoiments = Depoiments["Home"]

const cards = [
    {
        icon: foto,
        title: 'Planos de Estudos',
        description: 'Auxiliamos os estudantes a montarem seus planos de estudos baseados em suas necessidades.',
    },
    {
        icon: foto,
        title: 'Aulas de Qualidade',
        description: 'Aulas presenciais de todas as disciplinas dos principais vestibulares, atualizadas e com professores atestados.',
    },
    {
        icon: foto,
        title: 'Ambiente amigável',
        description: 'Ambiente que incentiva boa convivência, educação, respeito e a não competitividade, promovendo um melhor cenário para estudos.',
    },
    {
        icon: foto,
        title: 'Tecnologia e Educação',
        description: 'Uso da tecnologia para realizar monitoramento, acompanhamento e melhoraria na base educacional dos estudantes.',
    }]

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
                        <Button text="Inscrever-se" style="full big"/>
                        <Button text="Conhecer" style="outline big"/>
                    </div>

                </div>

                <div className='home-top-img'>
                    <img src={boy} className="home-img" alt="" />
                    <div className='square'></div>
                </div>

            </div>

            <div className='home-mid'>

                <div className='home-mid-content'>
                    <span className='text-call'>Lute conosco.</span>
                    <span className='home-mid-title'>Seu <span className='red'>lugar</span> é na <span className='red'>Universidade!</span></span>
                    <span className='home-mid-text'>
                        O <span className='bolder'>Projeto Herbert de Souza</span> visa muito mais do que apenas aprovação no vestibular, buscamos incentivar o pensamento e senso crítico nos estudantes e fornecer aws ferramentas para que possam buscar seus objetivos individuais e coletivos.
                    </span>
                    <span className='text-call'>Seu lugar está aqui:</span>

                    <div className='logos-universidades'>

                        <img src={unicamp} className="logo-universidade" alt="" />
                        <img src={usp} className="logo-universidade usp" alt="" />
                        <img src={ufscar} className="logo-universidade" alt="" />
                        <img src={enem} className="logo-universidade" alt="" />
                        <img src={cotuca} className="logo-universidade" alt="" />
                        <img src={etec} className="logo-universidade" alt="" />

                    </div>

                    <span className='text-call'>E muito mais.</span>
                    
                    <span className='home-mid-text'>
                        Nossa história é desenhada por lutas e objetivos extensos, onde cada estudante, professor ou colaborador escreva uma nova página sobre o futuro do projeto, conheça nossa história e escreva sua página também.
                    </span>

                    <Button text="Conhecer" style="outline big"/>

                    <img src={resist} className="resist-logo"/>
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

                    {depoiments.map((depoiment) => {
                        return(
                            <History nome={depoiment["Nome"]} universidade={depoiment["Universidade"]} curso={depoiment["Curso"]} depoimento={depoiment["Depoimento"]}/>
                        )
                    })}

                </div>

            </div>

            <div className='home-projects'>
                
                <div className='projects-left'>
                    
                    <img src={herbertLogo} className="logo-projects"/>

                    <span className='projects-title'>Para Todos</span>
                    <span className='projects-resume'>
                        O Herbert não é apenas um serviço para vestibulares, buscamos alcançar
                        os principais pilares da sociedade e fornecer o máximo de apoio nas áreas
                        que somos capacitados. Através de divulgação cultural, educacional, tecnológica
                        e muitos outros projetos. 
                        Aulas de programação, desenho, artesanato, preparatório para concursos e muito mais!
                        Fique por dentro ou sugira ideias que ajudem a todos! 
                    </span>

                    <span className='projects-resume'>
                        Confira alguns dos nossos projetos realizados que podem retornar a qualquer momento.
                    </span>

                    <Button text="Projetos" style="outline big"/>

                </div>

                <div className='projects-right'>
                    
                    <span className='projects-right-title'>Alguns Projetos</span>
                    <span className='projects-right-legend'>Clique em algum de nossos projetos realizados para saber mais sobre ele.</span>
                    
                    <div className='projects'>

                        <div className='projects-col'>

                            <ProjectCard name="Programação"/>
                            <ProjectCard name="Artes"/>
                            <ProjectCard name="Sarau"/>

                        </div>

                        <div className='projects-col'>

                            <ProjectCard name="EJA"/>
                            <ProjectCard name="Concursos"/>
                            <ProjectCard name="Infantil"/>

                        </div>

                        <div className='projects-col'>

                            <ProjectCard name="Debates"/>
                            <ProjectCard name="Música"/>
                            <ProjectCard name="Podcast"/>

                        </div>

                    </div>

                </div>

            </div>
            
            <div className='faixa-end'>

                    

            </div>

        </div>
    )
}

export default Home