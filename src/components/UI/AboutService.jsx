import React from "react";
import "../../styles/aboutService.css";

const AboutService = () => {
  return (
    <div>
      <h3 className="about__section__title">About Us</h3>
      <h4 className="about__section__desc">Welcome to car rent service</h4>
      <p className="about__desc__content">
        That wonderful feeling – you start the engine and your adventure begins…
        At this website everything we do is about giving you the freedom to
        discover more. We’ll move mountains to find you the right rental car,
        and bring you a smooth, hassle-free experience from start to finish.
        Here you can find out more about how we work.
      </p>
      <div className="how__work__container">
        <i className="me-4 ri-search-line"></i>
        <div className="how__work__tricks">
          <h4>Search</h4>
          <p>You search our site or our app for the car you want</p>
        </div>
      </div>
      <div className="how__work__container">
        <i className="me-4 ri-roadster-line"></i>
        <div className="how__work__tricks">
          <h4>Compare</h4>
          <p>We show you the deals and reviews you need to help you choose</p>
        </div>
      </div>
      <div className="how__work__container">
        <i className="me-4 ri-key-2-line"></i>
        <div className="how__work__tricks">
          <h4>Pick up your car</h4>
          <p>
            You take the voucher (on paper or on your app), your credit card,
            driving licence and passport to pick up your car
          </p>
        </div>
      </div>
      <div className="how__work__container">
        <i className="me-4 ri-service-line"></i>
        <div className="how__work__tricks">
          <h4>Enjoy our support</h4>
          <p>
            We’re here 24/7 to support you – before, during and after your trip
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
