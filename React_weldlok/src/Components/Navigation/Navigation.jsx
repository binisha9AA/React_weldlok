import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/logo.svg';
import phone from '../../assets/images/phone.svg';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className={`mid_nav ${menuOpen ? 'open' : ''}`}>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="../sections/OurProducts.jsx">
                    Our Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="../sections/Customers.jsx">Customers</NavLink>
                </li>
                <li>
                  <NavLink to="../sections/About.jsx">About us</NavLink>
                </li>
                <li>
                  <NavLink to="../sections/News.jsx">News</NavLink>
                </li>
                <li>
                  <NavLink to="../Footer/Footer.jsx">Contact us</NavLink>
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
            <div
              className={`menu ${menuOpen ? 'open' : ''}`}
              onClick={() => {
                setMenuOpen(!menuOpen);
                console.log('clicked');
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
