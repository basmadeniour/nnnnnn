import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./Fava.css";


// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DeletedCard from "../components/DeletedCard/DeletedCard";
import JustForYou from "../components/JustForYou/JustForYou";

const Fava = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Persist favorites to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }, [favorites]);

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
    beforeChange: (currentSlide, nextSlide) => {
      const sliderContainer = document.querySelector(".slick-slider");
      if (sliderContainer) {
        const focusedEl = sliderContainer.querySelector(":focus");
        if (focusedEl) focusedEl.blur();
      }
    },
  };

  return (
    <div className="container py-4 px-4 justify-content-center position-relative">
      <h6 className="h6wishlist">Wishlist ({favorites.length})</h6>

      {favorites.length > 0 ? (
        <Slider {...settings}>
          {favorites.map((item) => (
            <DeletedCard
              key={item.id}
              id={item.id}
              name={item.name}
              product_img={item.image}
              newprice={item.new_price}
              salebg={item.salebg}
              salepersent={item.salepersent}
            />
          ))}
        </Slider>
      ) : (
        <div className="fav-item text-center">
          <p>No favorite items available.</p>
        </div>
      )}
      <JustForYou/>
    </div>
  );
};

export default Fava;






