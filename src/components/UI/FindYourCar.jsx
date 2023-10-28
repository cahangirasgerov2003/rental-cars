import React from "react";
import "../../styles/findYourCar.css";

const FindYourCar = () => {
  const formControl = () => {
    const forms = document.querySelector(".needs-validation");
    forms.classList.add("was-validated");
  };

  return (
    <div className="container">
      <form className="row needs-validation find__car__form" noValidate>
        <div className="col-12">
          <span className="d-flex align-items-center">
            <p className="mb-0">Find your best car here ...</p>
            <i className="ri-ball-pen-fill pen__ball"></i>
          </span>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <input
            className="form-control"
            type="text"
            id="from__address"
            placeholder="From address"
            required
          />
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>

        <div className="col-md-4 col-sm-6 col-12">
          <input
            className="form-control"
            type="text"
            id="to__address"
            placeholder="To address"
            required
          />
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <input
            className="form-control"
            type="date"
            id="journey__date"
            required
          />
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <input
            className="form-control"
            type="time"
            id="journey__time"
            defaultValue="0"
            required
          />
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>

        <div className="col-md-4 col-sm-6 col-12 selectFindCar">
          <select
            className="form-select"
            name="AC__type"
            id="AC__type"
            defaultValue="AC Car"
            onChange={() => {
              console.log("a");
            }}
          >
            <option value="AC Car">AC Car</option>
            <option value="Non AC Car">Non AC Car</option>
          </select>
        </div>

        <div className="col-md-4 col-sm-6 col-12">
          <button
            type="button"
            className="button w-100"
            onClick={() => {
              formControl();
            }}
          >
            Find car
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindYourCar;
