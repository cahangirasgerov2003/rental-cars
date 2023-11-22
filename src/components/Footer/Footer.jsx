import React from "react";
import "../../styles/footer.css";
import { Link, NavLink } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const date = new Date();
  const copy__right__date = date.getFullYear();
  const quickLinks = [
    {
      path: "/home",
      content: "Home",
    },
    {
      path: "/about",
      content: "About",
    },
    {
      path: "/cars",
      content: "Cars",
    },
    {
      path: "/policy",
      content: "Privacy Policy",
    },
    {
      path: "/blogs",
      content: "Blogs",
    },
    {
      path: "/contact",
      content: "Contact",
    },
  ];

  const controlEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function successEmailToast() {
    toast.success("Updates will be shared with you : )", {
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
  }

  function errorEmailToast() {
    toast.error("Verify the authenticity of the email !", {
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
  }

  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 d-flex align-items-center">
              <div className="footer__logo">
                <h1 className="d-inline-block">
                  <Link to="/home" className="d-flex align-items-center gap-3">
                    <i className="ri-police-car-line"></i>
                    <span>Rent Car Service</span>
                  </Link>
                </h1>
                <div className="footer__logo__content">
                  <p>
                    Since 2015 “Car Rent Baku” owns the biggest car park in the
                    country. Our cars are matching all required standards and we
                    are offering you car rental on most profitable conditions.
                    Despite large choice of rent-a-car companies, quality and
                    safety requirements are not being followed.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-2 col-6">
              <div className="links__container">
                <div className="quick__links">
                  <h3 className="text-center">Quick Links</h3>
                </div>
                <div className="links d-flex flex-column align-items-center">
                  {quickLinks.map((link, index) => {
                    return (
                      <div className="d-inline-block" key={index}>
                        <NavLink to={link.path}>
                          <h2>{link.content}</h2>
                        </NavLink>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-6">
              <div className="office__info__container">
                <div className="office__info__title">
                  <h3 className="text-center">Head Office</h3>
                </div>
                <div className="info__details">
                  <div className="street mb-2">
                    <p>Gence avenue , Baku</p>
                  </div>
                  <div className="phone mb-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <i className="ri-phone-line"></i>
                      <p>Phone :</p>
                    </div>
                    <h2>050-211-34-12</h2>
                  </div>
                  <div className="email mb-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <i className="ri-mail-line"></i>
                      <p>Email :</p>
                    </div>
                    <h2>ceko@gmail.com</h2>
                  </div>
                  <div className="office__time mb-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <i className="ri-time-line"></i>
                      <p>Office Time :</p>
                    </div>
                    <h2>9am - 6pm</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-12">
              <div className="newsletter">
                <h3 className="text-center">Newsletter</h3>
                <p className="text-center">Subscribe our newsletter</p>
                <div className="sendNewsletter d-flex">
                  <input
                    type="text"
                    id="sendNewsletter"
                    placeholder="Email..."
                    className="w-100"
                  />
                  <i
                    className="ri-send-plane-2-line text-white sendIcon"
                    onClick={() => {
                      if (
                        controlEmail(document.querySelector("#sendNewsletter"))
                      ) {
                        successEmailToast();
                      } else {
                        errorEmailToast();
                      }
                    }}
                  ></i>
                </div>
              </div>
            </div>

            <div className="col-12" style={{ marginTop: 20 + "px" }}>
              <div className="copy__right">
                <h2 className="d-flex justify-content-center align-items-center gap-1">
                  <i className="ri-copyright-line"></i>
                  <p
                    style={{
                      fontSize: 0.85 + "rem",
                      color: "#ffffffb6",
                      marginBottom: 0,
                    }}
                  >
                    Copyright {copy__right__date}, Developed by JAHANGIR
                    ASGAROV. All rights reserved.
                  </p>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </footer>
  );
};

export default Footer;
