import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
       <div className="container">
         <div className="row">
           <div className="col-6">
              <div className="header__top__left">
                <span className='header__help__text'>Need Help?</span>
                <span className="header__top__help">
                <i className="ri-phone-fill"></i>+994 ** *** ** **
                </span>
              </div>
           </div>
           <div className="col-6">
            <div className="header__top__right">
              <Link to="#" className='d-flex align-items-center gap-1'>
                  <i className="ri-login-box-line"></i>Login
              </Link>
              <Link to="#" className='d-flex align-items-center gap-1'>
                  <i className="ri-user-settings-line"></i>Register
              </Link>
            </div>
           </div>
         </div>
        </div>
       </div>

       <div className="header__middle">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
                <div className="header__middle__logo">
                  <h1>
                    <Link to="/home" className='d-flex align-items-center'>
                      <i class="ri-roadster-line"></i>
                      <span>
                        Rent Car <br /> Servise
                      </span>
                    </Link>
                  </h1>
                </div>
            </div>

            <div className="col-lg-3">
                <div className="header__middle__location">
                  <div className='d-flex align-items-center'>
                    <i class="ri-earth-line"></i>
                    <div className="header__middle__content">
                      <h4>Azerbaijan</h4>
                      <h6>Baku, Azerbaijan</h6>
                    </div>
                  </div>
                </div>
            </div>
            
          </div>
        </div>
       </div>
    </header>
  )
}

export default Header;