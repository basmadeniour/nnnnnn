import React from 'react'
import "./Notfound.css"
import { Link } from 'react-router-dom';


export const Notfound = () => {
  return (
    <div className='notfounddiv'>
                <h1 className='h1notfound'>404 Not Found</h1>
                <p className='pnotfound'>You visited page not found. you may back home page.</p>
               <button className='notfoundbtn'> <Link to="/" className='notfoundlink' >Back to home page</Link></button>
               
    </div>
  )
}

export default Notfound ;
