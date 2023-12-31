import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const menuRef = useRef(null);
  const headerNavLinks = [
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
      path: "/blogs",
      content: "Blogs",
    },
    {
      path: "/contact",
      content: "Contact",
    },
  ];

  const warningToast = () => {
    toast.warning("An unexpected error occurred !", {
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
  };

  function toggleMenu() {
    menuRef.current.classList.toggle("menu__visible");
  }
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header__top__left">
                <span className="header__help__text">Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i>+994 ** *** ** **
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="header__top__right">
                <NavLink
                  to="/login"
                  className="d-flex align-items-center gap-2"
                >
                  <i className="ri-login-box-line"></i>
                  <span>Login</span>
                </NavLink>
                <NavLink
                  to="/register"
                  className="d-flex align-items-center gap-2"
                >
                  <i className="ri-user-settings-line"></i>
                  <span>Register</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header__middle">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="header__middle__logo">
                <h1 className="d-inline-block">
                  <Link to="/home" className="d-flex align-items-center gap-3">
                    <i className="ri-roadster-line"></i>
                    <span>
                      Rent Car <br /> Servise
                    </span>
                  </Link>
                </h1>
              </div>
            </div>

            <div className="col-3">
              <div className="header__middle__location">
                <div className="d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-earth-line"></i>
                  </span>
                  <div className="header__location__content">
                    <h4>Azerbaijan</h4>
                    <h6>Baku, Azerbaijan</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="header__middle__workday">
                <div className="d-flex align-items-center gap-2">
                  <i className="ri-time-line"></i>
                  <div className="header__workday__content">
                    <h4>Sunday to Friday</h4>
                    <h6>9am - 6pm</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-2 d-flex align-items-center">
              <div className="header__middle__request d-flex align-items-center justify-content-end">
                <button
                  className="button request__btn"
                  onClick={() => {
                    warningToast();
                  }}
                >
                  <div>
                    <i className="ri-phone-line"></i>Request a call
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header__navbar">
        <div className="container">
          <div className="header__navigation d-flex align-items-center justify-content-between">
            <div className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </div>
            <div
              className="header__navigation__left"
              onClick={toggleMenu}
              ref={menuRef}
            >
              <div className="toggle__menu">
                <div className="closeMenu">
                  <i className="ri-close-circle-line"></i>
                </div>
                {headerNavLinks.map((link, index) => {
                  return (
                    <NavLink to={link.path} key={index}>
                      {link.content}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="header__navigation__right">
              <div className="searchElement">
                <input type="text" placeholder="Search ..."></input>
                <i className="ri-search-eye-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </header>
  );
};

export default Header;
