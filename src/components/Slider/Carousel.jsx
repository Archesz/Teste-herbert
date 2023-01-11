import React, {useState} from 'react'
import './Carousel.scss'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'

function prevCarousel(){
    alert("Atrás")
}

function nextCarousel(){
    alert("Próximo")
}

function Carousel(props) {
    return (
        <div className='carousel-container'>
            
            <GrFormPrevious className='carousel-icon carousel-prev' onClick={prevCarousel}/>

            <div className='carousel-view'>
                
                <div className='square sq1 opacity'></div>
                <div className='square sq2 highlighted'></div>
                <div className='square sq3 opacity'></div>

            </div>

            <GrFormNext className='carousel-icon carousel-next' onClick={nextCarousel}/>

        </div>
    )
}

export default Carousel