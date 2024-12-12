import React from 'react';
import { Link } from 'react-router-dom';
import './ViewAllBtn.css';

export const Viewall = () => {
  return (
    <div className="viewallbtn">
   
      <Link to="../pages/Category" className="btnlink">
      <button  className="viewallbutton">  View All Products </button>
      </Link>
      
    </div>
  );
};

export default Viewall;


