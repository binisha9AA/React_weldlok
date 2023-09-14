import React from 'react';
import civildg from '../../assets/images/ciivil drainage.svg';
import ViewProdcutButton from '../Buttons/viewProdcutButton';
import flooring from '../../assets/images/flooring.png';
import handrail from '../../assets/images/Handrail Systems.png';
import mastermesh from '../../assets/images/mastermesh.png';
import SectionHeading from '../sectionHeading/SectionHeading';

export const OurProducts = () => {
  const products = [
    {
      id: 0,
      image: civildg,
      title: 'Civil Drainage products',
      texts:
        'Innovative Civil Drainage Products Including Ductile, Mild Steel Grates, Orca Drain...',
    },
    {
      id: 1,
      image: flooring,
      title: 'Flooring & Grating Solutions',
      texts:
        'Weldlok Grating and Flooring Products Come In Stainless Steel, Steel, & Mild Steel...',
    },
    {
      id: 2,
      image: handrail,
      title: 'Handrail Systems',
      texts:
        'Weldlok Grating and Flooring Products Come In Stainless Steel, Steel, & Mild Steel...',
    },
    {
      id: 4,
      image: mastermesh,
      title: 'Mastermesh Expanded Perforated',
      texts:
        'Standard And Custom Designed Perforated Metal Products, Security Mesh, Decorative...',
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
                {products.map((product) => (
                  <div className="gridimg_card1 s3_grid_card" key={product.id}>
                    <img src={product.image} alt="" />
                    <div className="product">
                      <h3 className="product--name">{product.title}</h3>
                      <p className="product--description">{product.texts}</p>
                    </div>
                    <ViewProdcutButton productText={'view product'} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
