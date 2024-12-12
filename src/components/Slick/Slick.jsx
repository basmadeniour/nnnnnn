import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from '../Card/ProductCard';
import "./Slick.css";
import Productdata from "../Assets/data";

const Slick = () => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-prev-arrow" onClick={onClick}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-next-arrow" onClick={onClick}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container py-4 px-4 justify-content-center position-relative">
      <Slider {...settings}>
        {/* Check if Productdata is valid */}
        {Productdata && Productdata.length > 0 ? (
          Productdata.map((item) => (
            <div key={item.id}>
              <ProductCard
                id={item.id}
                name={item.name}
                product_img={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                salepersent={item.salepersent} // Pass sale percentage if available
                salebg={item.salebg} // Pass sale background color if available
                stars={item.stars} // Pass the stars rating if available
              />
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </Slider>
    </div>
  );
};

export default Slick;





  





