import React from 'react';
import './DetailedCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export const DetailedCard = () => {
  return (
    <div className='carddiv'>
    <div className="divphoto">
      <div className="divsale" style={{ backgroundColor: props.salebg }}>{props.salepersent}</div>
      <img 
        src={props.product_img} 
        alt={props.name} 
        onClick={handleImageClick} 
      />
      
     

      <div className="fav-more">
          <div className="heartdiv">
          <FontAwesomeIcon icon={faEye} />
          </div>
      </div>    
     
          <div className="addtocart">Add to cart</div>
          
    </div>
    
    <div className="productdetails">
      <p className='itemname'>{props.name}</p>
      <p className='pnewprice'>{"$"+props.nweprice} <span className='spanoldprice'><del>{"$"+props.oldprice}</del></span></p>
    </div>
  </div>
  );
};

export default DetailedCard;
