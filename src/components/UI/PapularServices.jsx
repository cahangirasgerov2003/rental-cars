import React from "react";
import "../../styles/papularServices.css";
import { servicesData } from "../../assets/data/servicesData";
import ServiceItem from "./ServiceItem";

const PapularServices = () => {
  return (
    <>
      <div className="col-12 mb-5">
        <h3 className="about__section__title section__title text-center">
          See our
        </h3>
        <h4 className="about__section__desc text-center">Popular Services</h4>
      </div>

      {servicesData.map((service) => {
        return <ServiceItem service={service} key={service.id} />;
      })}
    </>
  );
};

export default PapularServices;
