import React from 'react';
import { Redbutton } from '../Buttons/redbutton';
import rightArrow from '../../assets/images/arrow-right-up-line.svg';
import industr from '../../assets/images/industrial img.png';
import industrLogo from '../../assets/images/Industrial.svg';
import civil from '../../assets/images/Civil.svg';
import arch from '../../assets/images/Architectural.svg';
import arrowDow from '../../assets/images/arrowDown.svg';
export const HeroSection = () => {
  return (
    <>
      <div className="hero_section">
        <h1>High quality, reliable and proven products and systems</h1>
        <p className="hero--paragraph--section">
          The Weldlok brand guarantees the right solution for all customers.
        </p>

        <Redbutton buttonText={'Find Out More'} />
      </div>
      <div className="grid_cards">
        <div className="container">
          <div className="grid-container">
            <div className="card">
              <div className="card_title">
                <div className="card_name">
                  <img src={industrLogo} alt="" className="card_logo" />
                  <h3 className="card--name--title">industrial</h3>
                  <img src={rightArrow} alt="arrow" className="card_arrow" />
                </div>

                <p>
                  We ensure our clients’ success by delivering the highest
                  quality products.
                </p>
              </div>
              <div className="card_image">
                <img src={industr} alt="" />
              </div>
            </div>
            <div className="card">
              <div className="card_title">
                <div className="card_name">
                  <img src={civil} alt="" className="card_logo" />
                  <h3 className="card--name--title">Civil</h3>
                  <img src={rightArrow} alt="arrow" className="card_arrow" />
                </div>

                <p>
                  We ensure our clients’ success by delivering the highest
                  quality products.
                </p>
              </div>
              <div className="card_image">
                <img src={industr} alt="" />
              </div>
            </div>
            <div className="card">
              <div className="card_title">
                <div className="card_name">
                  <img src={arch} alt="" className="card_logo" />
                  <h3 className="card--name--title">ARCHITECTURAL</h3>
                  <img src={rightArrow} alt="arrow" className="card_arrow" />
                </div>

                <p>
                  We ensure our clients’ success by delivering the highest
                  quality products.
                </p>
              </div>
              <div className="card_image">
                <img src={industr} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
