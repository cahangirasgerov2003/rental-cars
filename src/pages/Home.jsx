import React from "react";
import Helmet from "../components/Helmet/Helmet";
import ReserveSlider from "../components/UI/ReserveSlider";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet title="Home">
        <section className="reserve__slider__section">
          <ReserveSlider />
        </section>
      </Helmet>
    </React.Fragment>
  );
};

export default Home;
