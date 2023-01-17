import React from 'react'
import Avatar from '../Avatar/Avatar'
import './CardArea.scss'

import { BsChevronCompactDown } from 'react-icons/bs'

function viewMore(color){

    let icon = document.querySelector(`#icon_${color}`);
    let card = document.querySelector(`#area_${color}`);
    let more = document.querySelector(`#more_${color}`);
    
    card.classList.toggle("expand")
    icon.style.transform = 'rotate(180deg)';
    
    setTimeout(() => {
        more.classList.toggle("hidden")
    }, 0.9);

}

function CardArea(props) {
    return (
        <div className='cardArea-container' id={`area_${props.color}`}>

            <div className={`cardArea-top ${props.color}`}></div>
            
            <div className='cardArea-content'>

                <span className='cardArea-title'>{props.title}</span>

                <span className='cardArea-resume'>
                    {props.resume}
                </span>

                <span className='cardArea-second-title'>Time</span>

                <div className='cardArea-time'>
                    <Avatar name="João Vitor" photo="https://d3awytnmmfk53d.cloudfront.net/landings/static/images/multicategory/AboutOurTeachers/prof-3.png"/>
                    <Avatar name="Barbara" photo="https://d3awytnmmfk53d.cloudfront.net/landings/static/images/multicategory/AboutOurTeachers/prof-5.png"/>
                    <Avatar name="João Pedro" photo="https://d3awytnmmfk53d.cloudfront.net/landings/static/images/multicategory/AboutOurTeachers/prof-1.png"/>
                </div>

                <div className='more hidden' id={`more_${props.scolor}`}>

                </div>

            </div>

            <BsChevronCompactDown className='icon-more' id={`icon_${props.color}`} onClick={() => {viewMore(props.color)}}/>

        </div>
    )
}

export default CardArea