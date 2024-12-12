import React from 'react'
import Notfound from '../components/NotFound/Notfound';
import Footer from '../components/Footer/Footer';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

export const Category = () => {
  return (
    <div>
       <Notfound style={{height:"auto"}}/>
       <div className="caregofot" style={{marginTop: "20px"}}>
        {/* <div >
        <Footer/>
        </div> */}
       </div>
    </div>
  )
}

export default Category;
