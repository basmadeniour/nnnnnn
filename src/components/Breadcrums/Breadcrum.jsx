import React from 'react'
import  "./Breadcrum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Productdisplay from "../Productdisplay/Productdisplay"

export const Breadcrum = (props) => {
    const {productdetails}=props;
  return (
    <div className='breadcrum'>
    Home <FontAwesomeIcon icon={faChevronRight} /> item details  <FontAwesomeIcon icon={faChevronRight} /> {productdetails.name}
                   <Productdisplay productdetails={productdetails}/>
    </div>
  )
}

export  default Breadcrum;
