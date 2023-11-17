import React from "react";
import "../../styles/safeRide.css";

const SafeRide = () => {
  return (
    <div>
      <div>
        <h4>We Are Committed To Provide Safe Ride Solutions</h4>
        <h5 className="section__desc__content">
          With a commitment to the safety of our users, we distinguish ourselves
          with engaging and secure ride solutions. Adhering to the highest
          modern safety standards, we ensure a safe connection for our drivers
          and passengers.
        </h5>
        <h5 className="section__desc__content">
          Our drivers are educated, experienced, and stand out with their
          commitment to safety. Whether during or after the ride, feel free to
          reach out with any questions or suggestions. Welcome to a step ahead
          in safety and quality!
        </h5>
      </div>
      <div className="d-flex help__call">
        <span>
          <i className="ri-phone-line" title="+994 ** *** ** **"></i>
        </span>
        <p>Need Any Help?</p>
      </div>
    </div>
  );
};

export default SafeRide;
