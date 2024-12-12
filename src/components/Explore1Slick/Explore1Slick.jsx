import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import explore111 from "../Assets/explore111";
import Explore1Card from '../Explore1Card/Explore1Card';

const Explore1Slick = () => {
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
        {explore111 && explore111.length > 0 ? (
          explore111.map((item) => (
            <div key={item.id}>
              <Explore1Card
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

export default Explore1Slick;