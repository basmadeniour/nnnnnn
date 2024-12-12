
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEye, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import explore111 from '../Assets/explore111';

const Explore1Card = (props) => {
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
            <FontAwesomeIcon
              icon={faHeart}
              className={`eye ${isFavorited ? 'favorited' : ''}`}
            />
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
            {"(" + props.pices+")"}
          </span>
        </p>
        <p>{renderStars(props.stars)}</p>
      </div>
    </div>
  );
};

// Default props
Explore1Card.defaultProps = {
  salepersent: "Sale",
  salebg: "#db4444",
  new_price: "0.00",
  stars: 3,
  pices:55,
  product_img: "https://via.placeholder.com/150",
  name: "Product Name",
};

export default Explore1Card;