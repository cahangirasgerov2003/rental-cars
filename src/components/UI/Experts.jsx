import React from "react";
import "../../styles/experts.css";
import expertsData from "../../assets/data/expert";
import { Link } from "react-router-dom";

const Experts = () => {
  return (
    <>
      {expertsData.map((item) => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-5" key={item.id}>
            <div className="about__expert">
              <div className="sosial__networks">
                <img alt="Expertr" src={item.imgUrl} className="w-100" />
                <div className="networks">
                  <Link to={item.fbUrl}>
                    <i className="ri-facebook-line"></i>
                  </Link>
                  <Link to={item.fbUrl}>
                    <i className="ri-twitter-line"></i>
                  </Link>
                  <Link to={item.fbUrl}>
                    <i className="ri-linkedin-line"></i>
                  </Link>
                  <Link to={item.fbUrl}>
                    <i className="ri-instagram-line"></i>
                  </Link>
                </div>
              </div>
              <h2
                className="expert__name text-center h6 mt-3"
                style={{ color: "rgb(11, 61, 38)" }}
              >
                {item.name}
              </h2>
              <h3 className="expert__experiance section__desc__content text-center mb-3">
                {item.experience}
              </h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Experts;
