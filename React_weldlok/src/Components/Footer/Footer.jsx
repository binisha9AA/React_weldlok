import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Redbutton } from '../Buttons/redbutton';
import linkedIn from '../../assets/images/linkedin.svg';
import youtube from '../../assets/images/youtube.svg';
import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';
import rightArrow from '../../assets/images/right-arrow.svg';
export const Footer = () => {
  const socialMedia = [
    {
      id: 0,
      icon: linkedIn,
    },
    {
      id: 1,
      icon: youtube,
    },
    {
      id: 2,
      icon: facebook,
    },
    {
      id: 3,
      icon: twitter,
    },
  ];

  const quickLinks = [
    { text: 'Home', url: '#' },
    { text: 'Our Customers', url: '#' },
    { text: 'News', url: '#' },
    { text: 'About Us', url: '#' },
    { text: 'Contact Us', url: '#' },
  ];

  const pageLinks = [
    { text: 'Civil Drainage Products', url: '#' },
    { text: 'Flooring & Grating Solutions', url: '#' },
    { text: 'News', url: '#' },
    { text: 'Handrail Systems', url: '#' },
    { text: 'Mastermesh Expanded Perforated', url: '#' },
  ];
  return (
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
                  <Redbutton buttonText="Request a quote" />
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
                      {quickLinks.map((link, index) => (
                        <li key={index}>
                          <a href={link.url}>{link.text}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="product_range links">
                  <div className="link_title">
                    <h2>Products range</h2>
                  </div>
                  <div className="page_links">
                    <ul>
                      {pageLinks.map((link, index) => (
                        <li key={index}>
                          <a href={link.url}>{link.text}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="subscribe_letter">
                  <div className="subscribe_text">
                    <h2>Subscribe To Our Newsletter</h2>
                  </div>
                  <div className="input_box">
                    <div className="input">
                      <input type="text" name="" placeholder="Email address" />
                    </div>
                    <div className="feedback_btn">
                      <img src={rightArrow} alt="" />
                    </div>
                  </div>
                  <div className="social_media_links">
                    <ul>
                      {socialMedia.map((social) => (
                        <li key={social.id}>
                          <a href="#">
                            <img src={social.icon} alt="" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="copyright">
                <div className="copyright_text">
                  <p>
                    © 2023 by NEPEAN Building and Infrastructure. Weldlok® is a
                    registered trademark of NEPEAN Building & Infrastructure.
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
  );
};
