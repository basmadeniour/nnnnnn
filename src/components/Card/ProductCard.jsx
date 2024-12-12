// import React from 'react';
// import "./ProductCard.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-regular-svg-icons'; 
// import { faEye } from '@fortawesome/free-solid-svg-icons';

// export const ProductCard = (props) => {
//   return (
//     <div className='carddiv'>
//         <div className="divphoto">
//             <div className="divsale">{props.salepersent}</div>
//             <img src={props.product_img} alt="" />

//             <div className="fav-more">
//                 <div className="heartdiv">
//                     <FontAwesomeIcon icon={faHeart} />
//                 </div>
//                 <div className="moreinfodiv">
//                     <FontAwesomeIcon icon={faEye} />
//                 </div>

//                 <div className="addtocart">Add to cart</div>

//             </div>

//         </div>
//         <div className="productdetails">
//                 <p>{props.name}</p>
//                 <p>${props.nweprice}${props.oldprice}</p>
//                 <p>{props.stars}</p>
//         </div>
//     </div>
//   );
// }

// export default ProductCard;







// import React, { useState } from 'react';
// import "./ProductCard.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-regular-svg-icons'; 
// import { faEye } from '@fortawesome/free-solid-svg-icons';

// export const ProductCard = (props) => {
//   // State to toggle the visibility of the 'Add to Cart' button
//   const [showAddToCart, setShowAddToCart] = useState(false);

//   // Function to handle the click event on the photo
//   const handleImageClick = () => {
//     setShowAddToCart(!showAddToCart); // Toggle the visibility of the "Add to Cart" button
//   };

//   return (
//         <div className='carddiv'>
//             <div className="divphoto">
//                 <div className="divsale">{props.salepersent}</div>
//                 <img src={props.product_img} alt="" />
    
//                 <div className="fav-more">
//                     <div className="heartdiv">
//                         <FontAwesomeIcon icon={faHeart} />
//                     </div>
//                     <div className="moreinfodiv">
//                         <FontAwesomeIcon icon={faEye} />
//                     </div>
    
//                     <div className="addtocart">Add to cart</div>
    
//                 </div>
    
//             </div>
//             <div className="productdetails">
//                     <p>{props.name}</p>
//                     <p>${props.nweprice}${props.oldprice}</p>
//                     <p>{props.stars}</p>
//             </div>
//         </div>
//       );
// };

// export default ProductCard;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEye, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';
import data_product from '../Assets/data';

const ProductCard = (props) => {
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleImageClick = () => {
    setShowAddToCart(!showAddToCart);
  };

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  // Render stars dynamically
  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars).fill().map((_, i) => (
          <FontAwesomeIcon key={`full-${i}`} icon={faStar} className="star full-star" />
        ))}
        {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="star half-star" />}
        {Array(emptyStars).fill().map((_, i) => (
          <FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="star empty-star" />
        ))}
      </>
    );
  };

  return (
    <div className="carddiv">
      <div className="divphoto">
        <div className="divsale" style={{ backgroundColor: props.salebg }}>
          {props.salepersent}
        </div>
        <img
          className="sliderimgg"
          src={props.product_img}
          alt={props.name}
          onClick={handleImageClick}
          
        />

        <div className="fav-more">
          <div className="heartdiv" onClick={handleFavoriteClick}>
          <Link to={`/productdetails/${props.id}`}>
            <FontAwesomeIcon
              icon={faHeart}
              className={`eye ${isFavorited ? 'favorited' : ''}`}
              onClick={window.scrollTo(0,0)}
            />
             </Link>
          </div>
          <div className="moreinfodiv">
          <Link to={`/productdetails/${props.id}`}>
              <FontAwesomeIcon icon={faEye} className="eye" />
            </Link>
          </div>
        </div>

        {showAddToCart && (
          <Link to={`/productdetails/${props.id}`}>
            <div className="addtocart">Add to cart</div>
          </Link>
        )}
      </div>

      <div className="productdetails">
        <p className='itemname'>{props.name}</p>
        <p className="pnewprice">
          {"$" + props.new_price}{' '}
          <span className="spanoldprice">
            <del>{"$" + props.old_price}</del>
          </span>
        </p>
        <p>{renderStars(props.stars)}</p>
      </div>
    </div>
  );
};

// Default props
ProductCard.defaultProps = {
  salepersent: "Sale",
  salebg: "#db4444",
  new_price: "0.00",
  old_price: "0.00",
  stars: 3,
  product_img: "https://via.placeholder.com/150",
  name: "Product Name",
};

export default ProductCard;



