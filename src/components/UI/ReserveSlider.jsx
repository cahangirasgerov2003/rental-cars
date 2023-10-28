import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../styles/reserveSlider.css";

const ReserveSlider = () => {
  const sliderSettings = {
    fade: true,
    speed: 3000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  };
  return (
    <Slider {...sliderSettings} className="slider__container">
      <div className="slider__item slider__item__01">
        <div className="container">
          <div className="slider__content">
            <h2 className="slider__title mb-3">For Rent 50 $ Per Day</h2>
            <h6 className="slider__desc mb-4">Reserve Now and Get 25% Off</h6>
            <button type="button" className="reserve__btn button mt-3">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="slider__item slider__item__02">
        <div className="container">
          <div className="slider__content">
            <h2 className="slider__title mb-3">For Rent 50 $ Per Day</h2>
            <h6 className="slider__desc mb-4">Reserve Now and Get 25% Off</h6>
            <button type="button" className="reserve__btn button mt-3">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="slider__item slider__item__03">
        <div className="container">
          <div className="slider__content">
            <h2 className="slider__title mb-3">For Rent 50 $ Per Day</h2>
            <h6 className="slider__desc mb-4">Reserve Now and Get 25% Off</h6>
            <button type="button" className="reserve__btn button mt-3">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default ReserveSlider;
