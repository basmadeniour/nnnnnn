import React from 'react';
import './BestSelling.css';
import Slick from '../Slick/Slick';
import Viewall from '../ViewAllBtn/ViewAllBtn';
import BestSellingSlick from '../BestSellingSlick/BestSellingSlick';



export const Bestselling = (props) => {
  return (
    <div className='container Bestselling'>
      {/* Upper Section */}
      <div className="row upper Bestupper"> 
        <div className="col-12 col-md-3 mb rrrr"> 
          <div className="row align-items-center sidddes">
            <div className="col-auto">
              <div className="square"> </div>
            </div>
            <div className="col">
              <p className='squarename'>{props.squarename}</p>
            </div>
          </div>   
          <div className="h3cat">
            <h3 className='squaretitle besttitle'>{props.squaretitle}</h3>
          </div>
        </div>
       
        <div className="col-12 col-md-4">
          <div className="some-other-content midbest" > 
                <Viewall className="viewBestbtn"/>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="lower Bestlower mt-4">
          <BestSellingSlick className="SlickNoArrows"/>
      </div>


    </div>
  );
}

export default Bestselling;