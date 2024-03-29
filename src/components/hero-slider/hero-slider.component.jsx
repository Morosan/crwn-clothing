import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./hero-slider.styles.scss";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useDispatch, useSelector } from 'react-redux';  
import { fetchCategoriesStart } from "../../store/categories/category.action";


const HeroSlider = () => {
  const dispatch = useDispatch();
  const categoriesMap = useSelector(selectCategoriesMap);

  useEffect(() => {
    const getCategoriesMap = async () => {
      try {
        dispatch(fetchCategoriesStart());
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    getCategoriesMap();
  }, [dispatch]); 
  

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };


  const sliderItems = Object.keys(categoriesMap).map((categoryTitle, index) => {
    const categoryImages = categoriesMap[categoryTitle];
    const randomIndex = Math.floor(Math.random() * categoryImages.length);
    const randomImage = categoryImages[randomIndex];
    
    return (
      <div key={index}>
        <img src={randomImage.imageUrl} alt={randomImage.name} />
      </div>
    );
  });

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliderItems}
      </Slider>
    </div>
  );
}

export default HeroSlider;
