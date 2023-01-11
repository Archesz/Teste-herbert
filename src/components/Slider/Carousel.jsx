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

    const [currentLeft, setCurrentLeft] = useState(0);
    const [currentMid, setCurrentMid] = useState(1);
    const [currentRight, setCurrentRight] = useState(2)
    
    let size = projetos.length
    
    function prevCarousel(){

        if(currentLeft == 0){
            setCurrentLeft(size-3)
            setCurrentMid(size-2)
            setCurrentRight(size-1)
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
        
        if(currentRight == size-1){
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
                />
                <ProjectCard
                  class="card-center"
                  title={projetos[currentMid].Nome}
                />
                <ProjectCard
                  class="card-right"
                  title={projetos[currentRight].Nome}
                /> 

            </div>
            
            <GrFormNext className='carousel-icon carousel-next' onClick={nextCarousel}/>

        </div>
    )
}

export default Carousel