import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import explore222 from "../Assets/explore222";
import ColoredProductCard from '../ColoredProductCard/ColoredProductCard';

const Slick = () => {
  // const PrevArrow = (props) => {
  //   const { onClick } = props;
  //   return (
  //     <div className="custom-prev-arrow" onClick={onClick}>
  //       <FontAwesomeIcon icon={faArrowLeft} />
  //     </div>
  //   );
  // };

  // const NextArrow = (props) => {
  //   const { onClick } = props;
  //   return (
  //     <div className="custom-next-arrow" onClick={onClick}>
  //       <FontAwesomeIcon icon={faArrowRight} />
  //     </div>
  //   );
  // };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
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
        {explore222 && explore222.length > 0 ? (
          explore222.map((item) => (
            <div key={item.id}>
              <ColoredProductCard
                id={item.id}
                name={item.name}
                product_img={item.image}
                new_price={item.new_price}
                salepersent={item.salepersent}
                salebg={item.salebg} 
                color1={item.color1}
                color2={item.color2}
                pices={item.pices}
                stars={item.stars} 
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
