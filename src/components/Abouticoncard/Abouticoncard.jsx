import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Abouticoncard.css";

export const Abouticoncard = (props) => {
  return (
    <div className='iconcard kppopouy'>
      <div className="icoooon">
        {/* Render the icon using FontAwesomeIcon */}
        <FontAwesomeIcon icon={props.icon} className="picon" />
      </div>
      <div className="iconinfo">
        <p>{props.text}</p> 
        <p>{props.pinfo}</p>
      </div>
    </div>
  );
};

export default Abouticoncard;

