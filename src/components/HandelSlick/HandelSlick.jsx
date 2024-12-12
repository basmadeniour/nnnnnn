import React from 'react';
import './HandelSlick.css';
import Slick from '../Slick/Slick';


export const HandelSlick = (props) => {
  return (
    <div className='container handelslickcontainer'>
      {/* Upper Section */}
      <div className="row upper"> 
        <div className="col-12 col-md-3 mb hhhhhhh" > 
          <div className="row align-items-center sidddes">
            <div className="col-auto">
              <div className="square"> </div>
            </div>
            <div className="col">
              <p className='squarename'>{props.squarename}</p>
            </div>
          </div>   
          <div className="h3cat">
            <h3 className='squaretitle'>{props.squaretitle}</h3>
          </div>
        </div>
       
        <div className="col-12 col-md-4">
          <div className="some-other-content">
                {props.midcontent}
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="lower mt-4">
          <Slick/>
      </div>


    </div>
  );
}

export default HandelSlick;

