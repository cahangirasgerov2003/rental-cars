import React from "react";
import "../../styles/earnWithUs.css";
import benz__yellow from "../../assets/images/cars/benz__yellow.png";

const EarnWithUs = () => {
  return (
    <div className="earn__us__content">
      <div className="container">
        <div className="row">
          <div className="col-6 mt-3">
            <p className="earn__us__title">
              Do You Want to Earn With Us? So Don't Be Late
            </p>
            <button type="button" className="button driver__btn">
              Become a Driver
            </button>
          </div>
          <div className="col-6 earn__us__img">
            <img src={benz__yellow} alt="car" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnWithUs;
