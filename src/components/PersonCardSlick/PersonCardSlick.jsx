import React from 'react';
import Slider from 'react-slick';
import "./PersonCardSlick.css"
import PersonCard from '../PersonCard/PersonCard';
import Tom from '../Assets/Tom.png';
import Emma from '../Assets/Emma.jpeg';
import Will from '../Assets/will.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const PersonCardSlick = () => {
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
      <Slider {...settings} className="lmmijo">
        <PersonCard img={Tom} pname="Tom Crouse" parapgh="Founder & Chairman"  className="persomimg"/>
        {/* <PersonCard img={Emma} pname="Emma Watson" parapgh="Managing Director" className="persomimg" /> */}
        <PersonCard img={Will} pname="Will Smith" parapgh="Product Designer" className="persomimg" />
        <PersonCard img={Tom} pname="Tom Crouse" parapgh="Founder & Chairman"  className="persomimg"/>
        <PersonCard img={Will} pname="Will Smith" parapgh="Product Designer" className="persomimg" />
      </Slider>
    </div>
  );
};

export default PersonCardSlick;
