import React from "react";
import Helmet from "../components/Helmet/Helmet";
import TitlePage from "../components/UI/TitlePage";
import AboutService from "../components/UI/AboutService";
import bentley from "../assets/images/about__us/green__bentley.png";
import carDrive from "../assets/images/about__us/car__drive.jpg";
import SafeRide from "../components/UI/SafeRide";
import EarnWithUs from "../components/UI/EarnWithUs";

const About = () => {
  return (
    <React.Fragment>
      <Helmet title="About">
        <section className="about__section mb-5">
          <TitlePage title="About Us"></TitlePage>
        </section>

        <section className="about__service__section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <AboutService />
              </div>
              <div className="col-lg-6 col-12 about__image">
                <div className="d-flex align-items-center h-100">
                  <img className="w-100" alt="car" src={bentley} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="safe__ride__section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <img
                  src={carDrive}
                  alt="Driver"
                  className="safe__ride__img"
                ></img>
              </div>
              <div className="col-lg-6 col-12">
                <SafeRide />
              </div>
            </div>
          </div>
        </section>

        <section className="earn__us">
          <EarnWithUs />
        </section>

        <section className="our__experts">
          <div className="container">
            <div className="row"></div>
          </div>
        </section>
      </Helmet>
    </React.Fragment>
  );
};

export default About;
