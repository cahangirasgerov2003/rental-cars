import React from "react";
import "../../styles/serviceItem.css";

const ServiceItem = ({ service }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="service__element">
        <div className="mb-3 service__element__icon">
          <i className={service.icon}></i>
        </div>
        <div className="service__element__content">
          <h5>{service.title}</h5>
          <p className="section__desc__content">{service.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
