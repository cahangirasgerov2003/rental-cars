import "../../styles/hotOffers.css";
import carData from "../../assets/data/carData";
import { Link, useNavigate } from "react-router-dom";
const HotOffers = () => {
  const navigate = useNavigate();

  const goToCar = (id) => {
    navigate(`/cars/${id}`);
  };

  return (
    <>
      {carData.map((carItem, index) => {
        return (
          <div className="col-lg-4 col-md-6 col-12 mb-5" key={index}>
            <div
              className="car__container"
              onClick={() => {
                goToCar(carItem.id);
              }}
            >
              <img
                src={carItem.img__url}
                className="car__image"
                alt={carItem.car__name}
              />
              <div className="car__content">
                <h2 className="car__name text-center">{carItem.car__name}</h2>
                <p className="car__price d-flex align-items-center justify-content-center">
                  <i className="ri-money-dollar-box-line me-1 mt-1"></i>
                  {carItem.price} / <span>Day</span>
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
                  <Link to={`/cars/${carItem.id}`}>Rent</Link>
                </button>
                <button type="button" className="details__button">
                  <Link to={`/cars/${carItem.id}`}>Details</Link>
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
