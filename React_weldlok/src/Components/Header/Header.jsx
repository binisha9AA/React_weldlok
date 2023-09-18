import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import logo from '../../assets/images/logo.svg';
import phone from '../../assets/images/phone.svg';
import arrowDow from '../../assets/images/arrowDown.svg';
import { HeroSection } from './HeroSection';
import { RxCross2 } from 'react-icons/rx';

export const Header = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  // Function to toggle the mobile navigation menu visibility
  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };
  return (
    <>
      <div className="site">
        <header>
          <div className="container">
            <div className="navigation">
              <div className="logo">
                <a href="#">
                  <img src={logo} alt="" />
                </a>
              </div>
              <nav className="nav">
                <div className="mid_nav">
                  <ul className="nav-menu">
                    <li>
                      <a href="" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#our_products" className="nav-link">
                        Our Products <img src={arrowDow} />
                      </a>
                    </li>
                    <li>
                      <a href="" className="nav-link">
                        Customers
                        <img src={arrowDow} />
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="nav-link">
                        About us
                        <img src={arrowDow} />
                      </a>
                    </li>

                    <li>
                      <a href="#news" className="nav-link">
                        News
                        <img src={arrowDow} />
                      </a>
                    </li>
                    <li>
                      <a href="#footer" className="nav-link">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="right_nav">
                  <div className="phone_logo">
                    <img src={phone} alt="" />
                  </div>
                  <div className="phone_number">
                    <p>1800 935 356</p>
                  </div>
                </div>
              </nav>
              {mobileNavVisible ? (
                <div className="mobile_nav">
                  <div
                    className={`mobile_nav_menu ${
                      mobileNavVisible ? 'active' : ''
                    }`}
                  >
                    <ul>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="#our_products">
                          Our Products <img src={arrowDow} />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Customers
                          <img src={arrowDow} />
                        </a>
                      </li>
                      <li>
                        <a href="#about">
                          About us
                          <img src={arrowDow} />
                        </a>
                      </li>

                      <li>
                        <a href="#news" className="nav-link">
                          News
                          <img src={arrowDow} />
                        </a>
                      </li>
                      <li>
                        <a href="#footer" className="nav-link">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mobile_nav_phone">
                    <div>
                      <img src={phone} alt="" />
                    </div>
                    <div className="mobile_nav_no">
                      <p>1800 935 356</p>
                    </div>
                  </div>
                </div>
              ) : null}
              <IconContext.Provider
                value={{ color: '#fff', className: 'hamburger_close' }}
              >
                <div className="hamburger" onClick={toggleMobileNav}>
                  {mobileNavVisible ? (
                    <RxCross2 />
                  ) : (
                    <div>
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </div>
                  )}
                </div>
              </IconContext.Provider>
              ;
            </div>
          </div>
        </header>
        {/* hero section starts here  */}
        <HeroSection />
      </div>
    </>
  );
};
