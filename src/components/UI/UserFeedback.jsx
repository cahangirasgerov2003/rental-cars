import React from "react";
import "../../styles/userFeedback.css";
import Slider from "react-slick";
import man1 from "../../assets/images/feedback/man1.jpg";
import man2 from "../../assets/images/feedback/man2.jpg";
import woman1 from "../../assets/images/feedback/woman1.jpg";
import woman2 from "../../assets/images/feedback/woman2.avif";
import { Link } from "react-router-dom";

const UserFeedback = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    swipeToSlide: true,
    speed: 2000,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      <div className="feedback__slider px-3 pb-5">
        <p className="feedback__slider__desc section__desc__content">
          {`Enterprise Rent-A-Car is my go-to choice for car rentals. Their
          website is user-friendly, the car selection is excellent, and the
          prices are competitive. The customer service is always top-notch,
          making the entire rental process a breeze.`.slice(0, 200) + "..."}
          <Link to="#" className="ms-1 detailed__rewiew">
            Detailed review
          </Link>
        </p>
        <div className="d-flex align-items-center gap-4 feedback__user__photo">
          <div className="feedback__photo">
            <img src={man1} alt="Man" />
          </div>
          <div className="feedback__user">
            <h2>Ayxan ...</h2>
            <h4>Customer 1</h4>
          </div>
        </div>
      </div>
      <div className="feedback__slider px-3 pb-5">
        <p className="feedback__slider__desc section__desc__content">
          {`I had a fantastic experience with Hertz. The car was clean and in
          great condition, and the pick-up and drop-off process was quick and
          convenient. Hertz's loyalty program also provides great perks for
          frequent renters.`.slice(0, 200) + "..."}
          <Link to="#" className="ms-1 detailed__rewiew">
            Detailed review
          </Link>
        </p>
        <div className="d-flex align-items-center gap-4 feedback__user__photo">
          <div className="feedback__photo">
            <img src={woman2} alt="Man" />
          </div>
          <div className="feedback__user">
            <h2>Alsu ...</h2>
            <h4>Customer 2</h4>
          </div>
        </div>
      </div>
      <div className="feedback__slider px-3 pb-5">
        <p className="feedback__slider__desc section__desc__content">
          {` Avis never disappoints! I've used their services multiple times, and
          each time, I've received a clean and well-maintained car. Their online
          booking system is easy to use, and the staff is friendly and helpful.
          I highly recommend Avis for your car rental needs.`.slice(0, 200) +
            "..."}
          <Link to="#" className="ms-1 detailed__rewiew">
            Detailed review
          </Link>
        </p>
        <div className="d-flex align-items-center gap-4 feedback__user__photo">
          <div className="feedback__photo">
            <img src={man2} alt="Man" />
          </div>
          <div className="feedback__user">
            <h2>Nurlan ...</h2>
            <h4>Customer 3</h4>
          </div>
        </div>
      </div>
      <div className="feedback__slider px-3 pb-5">
        <p className="feedback__slider__desc section__desc__content">
          {`Budget Car Rental exceeded my expectations. The rates were affordable,
          and I received a brand-new car that was a pleasure to drive. The
          entire process, from booking online to returning the car, was
          hassle-free. I'll definitely be renting from Budget again.`.slice(
            0,
            200
          ) + "..."}
          <Link to="#" className="ms-1 detailed__rewiew">
            Detailed review
          </Link>
        </p>
        <div className="d-flex align-items-center gap-4 feedback__user__photo">
          <div className="feedback__photo">
            <img src={woman1} alt="Man" />
          </div>
          <div className="feedback__user">
            <h2>Vəzifə ...</h2>
            <h4>Customer 4</h4>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default UserFeedback;
