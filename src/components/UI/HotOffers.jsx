import "../../styles/hotOffers.css";
import carData from "../../assets/data/carData";
import { Link, useNavigate } from "react-router-dom";
const HotOffers = () => {
  const navigate = useNavigate();

  const goToCar = () => {
    navigate("/cars");
  };

  return (
    <>
      {carData.map((carItem, index) => {
        return (
          <div className="col-4 mb-5" key={index}>
            <div className="car__container" onClick={goToCar}>
              <img
                src={carItem.img__url}
                className="car__image"
                alt={carItem.car__name}
              />
              <div className="car__content">
                <h2 className="car__name text-center">{carItem.car__name}</h2>
                <p className="car__price">
                  ${carItem.price} / <span>Day</span>
                </p>
              </div>
              <div className="car__features d-flex align-items-center justify-content-between">
                <div className="d-flex">
                  <i className="ri-car-line"></i>
                  <h5>{carItem.model}</h5>
                </div>
                <div className="d-flex">
                  <i className="ri-settings-2-line"></i>
                  <h5>{carItem.automatic}</h5>
                </div>
                <div className="d-flex" style={{ paddingRight: 2 + "px" }}>
                  <i className="ri-timer-flash-line"></i>
                  <h5>{carItem.speed}</h5>
                </div>
              </div>
              <div className="car__buttons">
                <button type="button" className="rent__button">
                  <Link to="/cars">Rent</Link>
                </button>
                <button type="button" className="details__button">
                  <Link to="/cars">Details</Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HotOffers;
