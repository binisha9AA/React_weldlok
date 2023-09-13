import React from 'react';
import civildg from '../../assets/images/ciivil drainage.svg';
import ViewProdcutButton from '../Buttons/viewProdcutButton';
import flooring from '../../assets/images/ciivil drainage.svg';
import handrail from '../../assets/images/Handrail Systems.png';
import mastermesh from '../../assets/images/mastermesh.png';
import SectionHeading from '../sectionHeading/SectionHeading';

export const OurProducts = () => {
  const products = [
    {
      id: 0,
      image: '../../assets/images/ciivil drainage.svg',
      title: 'Civil Drainage products',
      texts:
        'Innovative Civil Drainage Products Including Ductile, Mild Steel Grates, Orca Drain...',
    },
    {
      id: 1,
      image: '../../assets/images/ciivil drainage.svg',
      title: 'Flooring & Grating Solutions',
      texts: '',
    },
    {
      id: 2,
      image: '../../assets/images/Handrail Systems.png',
      title: 'Handrail Systems',
      texts:
        'Weldlok Grating and Flooring Products Come In Stainless Steel, Steel, & Mild Steel...',
    },
    {
      id: 4,
      image: '../../assets/images/mastermesh.png',
      title: 'Mastermesh Expanded Perforated',
      texts:
        'Standard And Custom Designed Perforated Metal Products,Security Mesh, Decorative...',
    },
  ];
  return (
    <>
      <section className="sectionthree">
        <div className="container">
          <div className="wrapper">
            <div className="main_content">
              <SectionHeading
                sectionName={'Our solutions'}
                sectionHeading={'Our Diverse Product Range'}
              />

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
