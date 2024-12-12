import React from 'react';
import "./IconCard.css"

export const IconCard = ({ icon, text }) => {
  return (
    <div className='iconcard'>
      <div className="icoooon">
       <p className='picon'> {icon} </p>
      </div>
      <div className="iconinfo">
        <p>{text}</p> 
      </div>
    </div>
  );
}

export default IconCard;

