import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ServicesCard.css"


export const ServicesCard = (props) => {
  return (
    <div className='ServicesCard'>
        <div className="sericon">
           <div className="inersericon">
           <FontAwesomeIcon icon={props.icon}  className='innericon'/>
           </div>
        </div>
        <h2 className="serh2">{props.h2}</h2>
        <p className="serp">{props.p}</p>
    </div>
  )
}

export default ServicesCard;
