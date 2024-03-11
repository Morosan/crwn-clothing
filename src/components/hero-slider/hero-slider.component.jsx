import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./hero-slider.styles.scss";

const HeroSlider = ({ title, products }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="" alt="1" />
        </div>
        <div>
          <img src="" alt="2" />
        </div>
        <div>
          <img src="" alt="3" />
        </div>
        <div>
          <img src="" alt="4" />
        </div>
        <div>
          <img src="" alt="5" />
        </div>
        <div>
          <img src="" alt="6" />
        </div>
      </Slider>
    </div>
  )
}

export default HeroSlider;
