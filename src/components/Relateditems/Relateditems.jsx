import React from 'react'
import "./Relateditems.css"
import data_product from '../Assets/data'
import Slick from '../Slick/Slick'

export const Relateditems = () => {
  return (
    <div className='Relateditems'>
    <div className="realtedhead">
        <div className="binksquare"> </div>
        <h3 className="h3related">
            Related items
        </h3>
    </div>
    <div className="relatedbody">
        {/* {data_product.map((item,i)=>{ */}
              {/* return */}
               <Slick/>
        {/* })} */}
    </div>
     </div>
  )
}


export default Relateditems;