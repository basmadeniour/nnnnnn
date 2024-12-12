import React, { useContext, useState } from 'react';
import "./Productdisplay.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTruckFast, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import Relateditems from '../Relateditems/Relateditems';
import { ShopContext } from '../../context/Shopcontext';

const Productdisplay = ({productdetails}) => {

    const {addToCart,addToFavorites}=useContext(ShopContext);

  // const { productdetails } = props;

  // Ensure useState is declared at the top of the component
  const [selectedSize, setSelectedSize] = useState(null);
  const [isHeartClicked, setIsHeartClicked] = useState(false);  // State for heart icon toggle

  // Function to render stars based on the rating
  const renderStars = (stars) => {
    const fullStars = Math.floor(stars); // Number of full stars
    const halfStar = stars % 1 !== 0; // Check if there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

    // Create star elements
    let starElements = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      starElements.push(<span key={`full-${i}`} className="star full">★</span>);
    }

    // Add half star if any
    if (halfStar) {
      starElements.push(<span key="half" className="star half">☆</span>);
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      starElements.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }

    return starElements;
  };

  // Fallback content if productdetails is undefined or null
  if (!productdetails) {
    return <div>Product details are not available.</div>;
  }

  // Handle size button click
  const handleSizeClick = (size) => {
    setSelectedSize(size); // Set the selected size
  };

  // Handle heart icon click to toggle color
  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);  // Toggle heart state
  };

  return (
       <div className="displaycontainer">
          <div className="Productdisplay row">
      {/* Left section (small images and big image) */}
      <div className="productdisplayleft col-12 col-md-5 row">
        <div className="fourthimg col-4 col-md-2">
          <div className="smallimg">
            <img src={productdetails.image} alt="product image" />
          </div>
          <div className="smallimg">
            <img src={productdetails.image} alt="product image" />
          </div>
          <div className="smallimg">
            <img src={productdetails.image} alt="product image" />
          </div>
          <div className="smallimg">
            <img src={productdetails.image} alt="product image" />
          </div>
        </div>
        <div className="bigimg col-8 col-md-10">
          <img src={productdetails.image} alt="Main product" className='jhj'/>
        </div>
      </div>

      {/* Right section (product name, stars, and number of reviews) */}
      <div className="productdisplayright col-12 col-md-3">
        <h1>{productdetails.name}</h1>
        <div className="rating d-flex align-items-center">
          {renderStars(productdetails.stars)} {productdetails.NumReview}
        </div>
        <p>{productdetails.new_price}$</p>
        <p>{productdetails.paragrph}</p>
        <hr />
        <h6>COLORS:
          <button className="coloredbtn1 kkkk" style={{background: productdetails.color1}}></button>
          <button className="coloredbtn2" style={{background: productdetails.color2}}></button>
        </h6>
        <h6>
          Sizes:
          {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
            <button
              key={size}
              className={`sizebtn ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => handleSizeClick(size)}
              style={{ backgroundColor: selectedSize === size ? '#db4444' : '' }}
            >
              {size}
            </button>
          ))}
        </h6>
        <div className="cartlogic">
         
         <div className="daanow">
        <button className="buycart" onClick={() => addToCart(productdetails)} >Buy Now </button> </div>


          <div className="love">
            <FontAwesomeIcon
              icon={faHeart}
              className={`heartlove ${isHeartClicked ? 'red-heart' : ''}`} 
              onClick={() => addToFavorites(productdetails)}/>
          </div>
          
        </div>
        <div className="delvies">
          <div className="free">
           <div className="icvonn">
           <FontAwesomeIcon icon={faTruckFast}   className='jjkjkk'/>
           </div>
           <div className="invoo">
              <h6>Free Delivery</h6>
              <p>Enter your Postol code for Delivery Availpility</p>
           </div>
          </div>
          <div className="return">
          <div className="icvonn">
          <FontAwesomeIcon icon={faRotateLeft}  className='jjkjkk'/>
          </div>
          <div className="invoo">
          <h6>Return Delivery</h6>
          <p> Free 30 Days Delivery returns.</p>
          </div>
          </div>
        </div>
      </div>
      
    </div>
     <div className="displayrelated">
     <Relateditems/>
     </div>
       </div>
  );
};

export default Productdisplay;










