import React from 'react';
import civildg from '../../assets/images/ciivil drainage.svg';
import ViewProdcutButton from '../Buttons/viewProdcutButton';
import flooring from '../../assets/images/flooring';
import handrail from '../../assets/images/Handrail Systems.png';
import mastermesh from '../../assets/images/mastermesh.png';

export const OurProducts = () => {
  return (
    <>
      <section className="sectionthree">
        <div className="container">
          <div className="wrapper">
            <div className="main_content">
              <div className="solution">
                <p>our solutions</p>
                <span>Our Diverse Product Range</span>
              </div>

              <div className="grid_image">
                <div className="gridimg_card1 s3_grid_card">
                  <img src={civildg} alt="" />
                  <div className="product">
                    <h3>Civil Drainage Products</h3>
                    <p>
                      Innovative Civil Drainage Products Including Ductile, Mild
                      Steel Grates, Orca Drain...
                    </p>
                  </div>
                  <ViewProdcutButton productText={'view product'} />
                </div>
                <div className="gridimg_card2 s3_grid_card">
                  <img src={flooring} alt="" />
                  <div className="product">
                    <h3>Flooring & Grating Solutions</h3>
                    <p>
                      Weldlok Grating and Flooring Products Come In Stainless
                      Steel, Steel, & Mild Steel...
                    </p>
                  </div>
                  <ViewProdcutButton productText={'view product'} />
                </div>
                <div className="gridimg_card3 s3_grid_card">
                  <img src={handrail} alt="" />
                  <div className="product">
                    <h3>Handrail Systems </h3>
                    <p>
                      Weldlok Balltube Handrail Systems Are Available In A
                      Variety Of Materials...
                    </p>
                  </div>
                  <ViewProdcutButton productText={'view product'} />
                </div>
                <div className="gridimg_card4 s3_grid_card">
                  <img src={mastermesh} alt="" />
                  <div className="product">
                    <h3>Mastermesh Expanded Perforated </h3>
                    <p>
                      Standard And Custom Designed Perforated Metal Products,
                      Security Mesh, Decorative...
                    </p>
                  </div>
                  <ViewProdcutButton productText={'view product'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
