import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./hero-slider.styles.scss";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useDispatch, useSelector } from 'react-redux';  
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";


const HeroSlider = () => {
  const dispatch = useDispatch();
  const categoriesMap = useSelector(selectCategoriesMap);

  useEffect(() => {
    const getCategoriesMap = async () => {
      try {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(setCategories(categoriesArray));
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    getCategoriesMap();
  }, [dispatch]); 
  

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
