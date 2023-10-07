import React from "react";
import Helmet from "../components/Helmet/Helmet";
import ReserveSlider from "../components/UI/ReserveSlider";
import FindYourCar from "../components/UI/FindYourCar";

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
      </Helmet>
    </React.Fragment>
  );
};

export default Home;
