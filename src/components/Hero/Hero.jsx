import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

export const Hero = (props) => {
  return (
    <div>
      <div className="row rowhero">
        <div className="herocontent">
          <h6 className='h6hero'>
            <FontAwesomeIcon icon={props.icon} className="hero-icon" style={{ marginRight: '10px' }} />
            {props.name}
          </h6>
          <h2 className='h2hero'>Up to {props.salepersent}% off Voucher</h2>
          <a href="#" style={{textDecoration:"none" ,color:"white"}}>
            Show more
            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
          </a>
        </div>
        <div className="heroimg">
          <img src={props.img} alt={props.name} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

