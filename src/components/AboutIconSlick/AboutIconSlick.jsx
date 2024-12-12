import React from 'react';
import "./AboutIconSlick.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faCoins, faSackDollar, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import Abouticoncard from "../Abouticoncard/Abouticoncard";
import Slider from 'react-slick';

const AboutIconSlick = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container py-4 px-4 justify-content-center position-relative">
      <Slider  className='lmmijo' {...settings}>
        <Abouticoncard className="kjlmfdlk" icon={faBuildingColumns} text={"10.5K"} pinfo={"Sellers active on our site"} />
        <Abouticoncard icon={faCoins} text={"33K"} pinfo={"monthly product sales"} />
        <Abouticoncard icon={faSackDollar} text={"45.5K"} pinfo={"customers active on our site"} />
        <Abouticoncard icon={faMoneyBillTrendUp} text={"25K"} pinfo={"Annual gross sales on our site"} />
      </Slider>
    </div>
  );
};

export default AboutIconSlick;
