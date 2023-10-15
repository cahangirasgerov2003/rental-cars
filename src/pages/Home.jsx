import React from "react";
import Helmet from "../components/Helmet/Helmet";
import ReserveSlider from "../components/UI/ReserveSlider";
import FindYourCar from "../components/UI/FindYourCar";
import AboutService from "../components/UI/AboutService";
import bentley from "../assets/images/about__us/green__bentley.png";
import PapularServices from "../components/UI/PapularServices";
import HotOffers from "../components/UI/HotOffers";
import EarnWithUs from "../components/UI/EarnWithUs";
const Home = () => {
  return (
    <React.Fragment>
      <Helmet title="Home">
        <section className="reserve__slider__section">
          <ReserveSlider />

          <div className="find__car__content w-100">
            <div className="container">
              <div className="row find__car__row">
                <div className="col-4 find__car__left"></div>
                <div className="col-8 find__car__right">
                  <FindYourCar />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about__service__section">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <AboutService />
              </div>
              <div className="col-6 about__image">
                <div className="d-flex align-items-center h-100">
                  <img className="w-100" alt="car" src={bentley} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="papular__services__section">
          <div className="container">
            <div className="row">
              <PapularServices />
            </div>
          </div>
        </section>

        <section className="hot__offers">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-5">
                <h3 className="offers__section__title section__title text-center">
                  Come with
                </h3>
                <h4 className="offers__section__desc text-center">
                  Hot Offers
                </h4>
              </div>

              <HotOffers />
            </div>
          </div>
        </section>

        <section className="earn__us">
          <EarnWithUs />
        </section>
      </Helmet>
    </React.Fragment>
  );
};

export default Home;
