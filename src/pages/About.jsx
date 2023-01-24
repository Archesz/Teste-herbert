import React from 'react'
import Faixa from '../components/Faixa/Faixa'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'
import CardArea from '../components/CardArea/CardArea'
import Button from '../components/Button/Button'

import '../styles/about.scss'

import foto1 from '../assets/fotos/foto1.jpg'
import foto2 from '../assets/fotos/about1.jpg'
import foto3 from '../assets/fotos/foto3.jpg'
import silas from '../assets/fotos/silas.PNG'
import reuniao from '../assets/fotos/reuniao.jpeg'

import parceiros from '../Data/company.json'

const company = parceiros["Parceiros"]

function About() {
  return (
    <div className='container'>

      <Faixa />
      <Menu />

      <div className='about-top'>

        <div className='about-cape'>

          <h1 className="about-title">Nossa História</h1>

          <h3 className='about-mintitle'>O que somos: </h3>

          <span>
            Fundado em 1998, o Cursinho Popular Herbert de Souza tem como objetivo dar acesso à educação de qualidade para jovens de baixa renda.
            Com mais de 3000 estudantes já passando por suas instalações, o cursinho tem se destacado por ajudar anualmente diversos alunos a ingressarem
            nas melhores universidades do país. Oferecemos cursos pré-vestibulares e pré-tecnicos, além de projetos paralelos voltados para artes, tecnologia e cultura.
            Nós acreditamos que todos merecem a oportunidade de realizar seus sonhos e estamos comprometidos em ajudar nossos alunos a alcançá-los.
          </span>

          <div className='about-fotos-1'>
            <img src={foto3} className='about-foto foto3' />
          </div>

          <h3 className='about-mintitle'>De onde viemos e onde estamos: </h3>

          <div className='about-area'>
            <span>
              A história do Cursinho Popular Herbert de Souza começa em 1998, quando um grupo de amigos, preocupados com a falta de acesso à educação de qualidade para jovens de baixa renda, decidiu fundar um cursinho popular. Com poucos recursos, eles começaram as aulas em uma pequena igreja, com professores e coordenadores que estavam na graduação ou já se formaram nas graduações e lecionavam de forma voluntária.
            </span>

            <span>
              Embora as condições iniciais fossem difíceis, a dedicação e o empenho dos fundadores logo começaram a dar resultados. Ano após ano, o cursinho foi ajudando cada vez mais estudantes a ingressarem nas melhores universidades do país. Em 2004, o cursinho começou a construir seu próprio espaço físico, onde hoje conta com 3 salas de aulas, além de cozinha, secretaria, banheiros, sala de convivência e continua expandindo. Atende hoje nos 3 periodos (manhã, tarde e noite) cerca de 400 alunos por ano.
            </span>

            <img src={silas} className='about-foto foto4' />


            <span>
              Hoje, o Cursinho Popular Herbert de Souza é reconhecido ppocomo uma das principais instituições do gênero na região. Além dos cursos pré-vestibulares e pré-tecnicos, oferece projetos paralelos voltados para artes, tecnologia e cultura. Além disso, o projeto tem se destacado por sua constante busca por inovação e melhoria, com a incorporação de tecnologias para melhorar a qualidade do ensino.
            </span>

            <span>
              A história do Cursinho Popular Herbert de Souza é a história de uma iniciativa que começou pequena e com poucos recursos, mas que, graças à dedicação e empenho de seus fundadores e professores, cresceu e se transformou em um projeto de sucesso. É a história de um grupo de amigos que acreditou na educação como ferramenta de transformação social e que, ano após ano, tem contribuído para mudar a vida de centenas de jovens.
            </span>

            <span>
              O Cursinho Popular Herbert de Souza é hoje um exemplo de como a educação pode ser um instrumento poderoso para promover a igualdade de oportunidades e combater a desigualdade social. Ele é uma instituição que tem como missão dar acesso à educação de qualidade para jovens de baixa renda e, com isso, contribuir para um futuro mais justo e equitativo para todos.
            </span>

            <img src={reuniao} className='about-foto foto5' />

          </div>

          <h3 className='about-mintitle'>Missão: </h3>
          <span>
            O Cursinho Popular Herbert de Souza tem como missão dar acesso à educação de qualidade para jovens de baixa renda, contribuindo para o desenvolvimento de suas habilidades e potencialidades, e preparando-os para ingressarem nas melhores universidades do país. Nós acreditamos que a educação é a chave para promover a igualdade de oportunidades e combater a desigualdade social. Nossa missão é proporcionar a nossos alunos as ferramentas e o conhecimento necessários para alcançar seus sonhos e construir um futuro mais justo e equitativo para todos.
          </span>

          <div className='equipe'>

            <span className='equipe-title'>Equipe</span>
            <CardArea color="purple" title="Coordenação" resume="A equipe responsável por fazer você não se preocupar com nada." />

            <span className='equipe-title'>Professores</span>
            
            <CardArea color="red" title="Exatas" resume="O time que resolve todos os problemas diretamente pela raiz!" />
            <CardArea color="green" title="Natureza" resume="O time que planta soluções e colhe resultados!" />
            <CardArea color="yellow" title="Humanas" resume="O time que ensina a arte de ser humano." />
            <CardArea color="blue" title="Linguagem" resume="O time que fala a língua do sucesso e escreve a história do conhecimento!" />

          </div>

        </div>

        <div className='about-company'>
          <span className='company-title'>Coletivo Popular</span>
          <span className='company-subtitle'>Conheça outros projetos populares que atuam em diversas frentes e fortalecem os movimentos que o Herbert acredita:</span>

          <div className='company-list'>
            {company.map((parceiro) => {
              return(
                <a href="#" className='parceiro'>{parceiro["Nome"]}</a>
              )
            })}
          </div>

        </div>

        <div className='faixa-end'>

          <span className='faixa-end-name small'>Vai perder a chance de estudar com essa galera? Eu acho que não!</span>

          <Button text="Inscrever-se!" style="full big black" function="Matricula" />

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default About