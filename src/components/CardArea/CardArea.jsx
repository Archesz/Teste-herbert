import React, {useState} from 'react'
import Avatar from '../Avatar/Avatar'
import './CardArea.scss'
import professoresJson from '../../Data/professores.json'
import { BsChevronCompactDown } from 'react-icons/bs'

const professores = professoresJson["Professores"]

function CardArea(props) {
    
    const [limite, setLimite] = useState(3)

    let count = 0
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
                    {professores.map((professor, index) => {
                        if(professor["Area"] == props.title && count < 5){
                            count += 1
                            return(
                                <Avatar name={professor["Nome"]} photo="https://d3awytnmmfk53d.cloudfront.net/landings/static/images/multicategory/AboutOurTeachers/prof-3.png"/>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default CardArea