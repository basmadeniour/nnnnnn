import React from 'react'
import "./PersonCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const PersonCard = (props) => {
  return (
    <div className='PersonCard'>
          <img src={props.img} alt="" className='imgpersonnn' />
          <h5>{props.pname}</h5>
          <p>{props.parapgh}</p>
          <div className="personicons">
          <FontAwesomeIcon icon={faTwitterSquare} className="footicon" />
          <FontAwesomeIcon icon={faInstagram} className="footicon" />
          <FontAwesomeIcon icon={faLinkedin} className="footicon" />
          </div>
    </div>
  )
}


export default PersonCard;