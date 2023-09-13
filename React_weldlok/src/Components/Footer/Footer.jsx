import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Redbutton } from '../Buttons/redbutton';

export const Footer = () => {
  return (
    <>
      <footer>
        <section className="sectioneight" id="footer">
          <div className="container">
            <div className="wrapper">
              <div className="footer_wrapper">
                <div className="footer_top">
                  <div className="s5_left">
                    <h2>enquire now</h2>
                    <h3>
                      For more information <span>on products and services</span>
                    </h3>
                  </div>
                  <div className="s5_right">
                    {/* <button className="btn find_more">
                      <a href="">
                        <img src={'../images/arrow-right-up-line.svg'} alt="" />
                        <p>Request A Quote</p>
                      </a>
                    </button> */}
                    <Redbutton buttonText={'Request a quote'} />
                  </div>
                </div>
                <div className="footer_grid">
                  <div className="company">
                    <a href="#">
                      <img src={logo} alt="logo" />
                    </a>
                    <p>
                      We are on a mission to invest in new products and systems
                      which will provide the Australian market with innovative
                      solutions.
                    </p>
                  </div>
                  <div className="links">
                    <div className="link_title">
                      <h2>Quick links</h2>
                    </div>
                    <div className="page_links">
                      <ul>
                        <li>
                          <a href="">Home</a>
                        </li>
                        <li>
                          <a href="">Our Customers</a>
                        </li>
                        <li>
                          <a href="">News</a>
                        </li>
                        <li>
                          <a href="">About Us</a>
                        </li>
                        <li>
                          <a href="">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product_range links">
                    <div className="link_title">
                      <h2>Products range</h2>
                    </div>
                    <div className="page_links ">
                      <ul>
                        <li>
                          <a href="">Civil Drainage Products</a>
                        </li>
                        <li>
                          <a href="">Flooring & Grating Solutions</a>
                        </li>
                        <li>
                          <a href="">Handrail Systems</a>
                        </li>
                        <li>
                          <a href="">Mastermesh Expanded Perforated</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="subscribe_letter">
                    <div className="subscribe_text">
                      <h2>Subscribe To Our Newsletter</h2>
                    </div>
                    <div className="input_box">
                      <div className="input">
                        <input
                          type="text"
                          name=""
                          placeholder="Email address"
                        />
                      </div>
                      <div className="feedback_btn">
                        <img src="../images/right-arrow.svg" alt="" />
                      </div>
                    </div>
                    <div className="social_media_links">
                      <ul>
                        <li>
                          <a href="">
                            <img src="../images/linkedin.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <img src="../images/youtube.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <img src="../images/facebook.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <img src="../images/twitter.svg" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="copyright">
                  <div className="copyright_text">
                    <p>
                      © 2023 by NEPEAN Building and Infrastructure. Weldlok® is
                      a registered trademark of NEPEAN Building &
                      Infrastructure.
                    </p>
                  </div>
                  <div className="policy">
                    <p>
                      Privacy Policy | Internet Policy | Terms & Conditions of
                      Sale | Conditions of Purchase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
