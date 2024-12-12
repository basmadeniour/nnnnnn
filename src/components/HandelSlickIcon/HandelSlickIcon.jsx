import React from 'react'
import "./HandelSlickIcon.css"
import HandelCategory from '../SlickIcon/SlickIcon';

export const SlickIcon = (props) => {
  return (
    <div className='container slickcontainer'>
    {/* Upper Section */}
    <div className="row upper"> 
      <div className="col-12 col-md-3 mb"> 
        <div className="row align-items-center sidddes">
          <div className="col cooolumnn">
            <div className="square"> </div>
          </div>
          <div className="col">
            <p className='squarename'>{props.squarename}</p>
          </div>
        </div>   
        <div className="h3cat">
          <h3 className='squaretitle  h3333'>{props.squaretitle}</h3>
        </div>
      </div>
     
      <div className="col-12 col-md-4">
        <div className="some-other-content">
        </div>
      </div>
    </div>

    {/* Lower Section */}
    <div className="lower mt-0 lowericoon">
        <HandelCategory/>
    </div>


  </div>
  )
}



export default SlickIcon;