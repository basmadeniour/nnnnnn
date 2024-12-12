import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileScreenButton,
  faComputer,
  faCamera,
  faHeadphones,
  faGamepad,
} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./SlickIcon.css";

// Updated IconCard component
const IconCard = ({ icon, text }) => (
  <div className="iconcard">
    <div className="icoooon">
      <FontAwesomeIcon icon={icon} size="3x" className='picon'/>
    </div>
    <div className="iconinfo">
      <p>{text}</p>
    </div>
  </div>
);

const HandelCategory = () => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-prev-arrow leffftarrow" onClick={onClick}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-next-arrow leffftarrow" onClick={onClick}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const categories = [
    { icon: faMobileScreenButton, name: "Phones" },
    { icon: faComputer, name: "Computers" },
    { icon: faClock, name: "Smart Watch" },
    { icon: faCamera, name: "Camera" },
    { icon: faHeadphones, name: "Headphones" },
    { icon: faGamepad, name: "Gaming" },
  ];

  return (
    <div className="container py-4 px-4 justify-content-center position-relative">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={index >= categories.length - 3 ? 'last-slides' : ''}
          >
            <IconCard icon={category.icon} text={category.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HandelCategory;






// import React from "react";
// import Slider from "react-slick";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMobileScreenButton,
//   faComputer,
//   faCamera,
//   faHeadphones,
//   faGamepad,
// } from "@fortawesome/free-solid-svg-icons";
// import { faClock } from "@fortawesome/free-regular-svg-icons";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import IconCard from "../IconCard/IconCard";
// import "./SlickIcon.css";

// const Slick = () => {
//   const PrevArrow = ({ onClick }) => (
//     <div className="custom-prev-arrow" onClick={onClick}>
//       <FontAwesomeIcon icon={faArrowLeft} />
//     </div>
//   );

//   const NextArrow = ({ onClick }) => (
//     <div className="custom-next-arrow" onClick={onClick}>
//       <FontAwesomeIcon icon={faArrowRight} />
//     </div>
//   );

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     responsive: [
//       { breakpoint: 1200, settings: { slidesToShow: 4 } },
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 450, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div className="container">
//       <Slider {...settings}>
//         <div>
//           <IconCard icon={faMobileScreenButton} text="Phones" />
//         </div>
//         <div>
//           <IconCard icon={faComputer} text="Computers" />
//         </div>
//         <div>
//           <IconCard icon={faClock} text="Smart Watch" />
//         </div>
//         <div>
//           <IconCard icon={faHeadphones} text="Headphones" />
//         </div>
//         <div>
//           <IconCard icon={faGamepad} text="Gaming" />
//         </div>
//         <div>
//           <IconCard icon={faCamera} text="Camera" />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Slick;










