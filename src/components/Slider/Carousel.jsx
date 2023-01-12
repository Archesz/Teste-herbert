import React, {useState} from 'react'
import './Carousel.scss'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
import ProjectCard from '../ProjectCard/ProjectCard'

/* Cards */

const projetos = [
    {"Nome": "Programação", "Imagem": ""},
    {"Nome": "Artes", "Imagem": ""},
    {"Nome": "Saraus", "Imagem": ""},
    {"Nome": "EJA", "Imagem": ""},
    {"Nome": "Concursos", "Imagem": ""},
    {"Nome": "Infantil", "Imagem": ""},
    {"Nome": "Debates", "Imagem": ""},
    {"Nome": "Músicas", "Imagem": ""},
    {"Nome": "Podcasts", "Imagem": ""},
]


function prevCarousel(){

    alert('ok')
}

function Carousel(props) {

    let lastIndex = projetos.length - 1

    const [currentLeft, setCurrentLeft] = useState(lastIndex);
    const [currentMid, setCurrentMid] = useState(0);
    const [currentRight, setCurrentRight] = useState(1)
        
    function prevCarousel(){

        if(currentMid == 0){
            setCurrentLeft(lastIndex-1)
            setCurrentMid(lastIndex)
            setCurrentRight(0)
        } else if(currentMid == lastIndex){
            setCurrentLeft(lastIndex-2)
            setCurrentMid(lastIndex-1)
            setCurrentRight(lastIndex)
        } else if(currentMid == 1){
            setCurrentLeft(lastIndex)
            setCurrentMid(0)
            setCurrentRight(1)
        } else{
            setCurrentLeft(index => {
                return index - 1;
            })
            setCurrentMid(index => {
                return index - 1;
            })
            setCurrentRight(index => {
                return index - 1;
            })
        }
    }

    function nextCarousel(){
        
        if(currentMid == lastIndex - 1){
            setCurrentLeft(lastIndex-1)
            setCurrentMid(lastIndex)
            setCurrentRight(0)
        } else if(currentMid == lastIndex){
            setCurrentLeft(lastIndex)
            setCurrentMid(0)
            setCurrentRight(1)
        } else if(currentMid == 0){
            setCurrentLeft(0)
            setCurrentMid(1)
            setCurrentRight(2)
        } else{
            setCurrentLeft(index => {
                return index + 1;
            })
            setCurrentMid(index => {
                return index + 1;
            })
            setCurrentRight(index => {
                return index + 1;
            })
        }
    }

    return (
        <div className='carousel-container'>
            
            <GrFormPrevious className='carousel-icon carousel-prev' onClick={prevCarousel}/>

            <div className='carousel-view'>

                <ProjectCard
                  class="card-left"
                  title={projetos[currentLeft].Nome}
                    n={currentLeft}
                />
                <ProjectCard
                  class="card-center"
                  title={projetos[currentMid].Nome}
                    n={currentMid}
                />
                <ProjectCard
                  class="card-right"
                  n={currentRight}
                  title={projetos[currentRight].Nome}
                /> 

            </div>
            
            <GrFormNext className='carousel-icon carousel-next' onClick={nextCarousel}/>

        </div>
    )
}

export default Carousel