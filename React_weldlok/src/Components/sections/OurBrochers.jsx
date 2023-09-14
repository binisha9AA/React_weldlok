import React from 'react';
import pdfImage from '../../assets/images/pdf (1) 1.svg';
import SectionHeading from '../sectionHeading/SectionHeading';
import diamond from '../../assets/images/diamond-grating.png';
import ViewProdcutButton from '../Buttons/viewProdcutButton';
import { Redbutton } from '../Buttons/redbutton';

const OurBrochures = () => {
  const brochuresData = [
    { id: 1, image: pdfImage, title: 'Mild Steel Diamond Grating' },
    { id: 2, image: pdfImage, title: 'Mild Steel Stair Treads' },
    { id: 3, image: pdfImage, title: 'Aluminium Stair Treads' },
    { id: 4, image: pdfImage, title: 'Mastermesh Expanded Metal' },
  ];

  return (
    <section className="sectionsix">
      <div className="new_container">
        <div className="wrapper">
          <div className="s6_wrapper">
            <div className="brochures">
              <SectionHeading
                sectionName="Our Brochures"
                sectionHeading="Explore and download our brochures"
              />
              <div className="pdf_files">
                {brochuresData.map((brochure) => (
                  <div className="brochers_product" key={brochure.id}>
                    <img src={brochure.image} alt="" />
                    <p className="brochures--name">{brochure.title}</p>
                  </div>
                ))}
              </div>
              <Redbutton buttonText={'View All Brochures'} />
            </div>
            <div className="pdf_download">
              {brochuresData.map((brochure) => (
                <div className="product_view" key={brochure.id}>
                  <div className="product_image_card">
                    <img src={diamond} alt="" />
                  </div>
                  <div className="pdf_product_name">
                    <h2 className="brocheur--title">{brochure.title}</h2>
                  </div>
                  <ViewProdcutButton productText={'Read Full Case Study'} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBrochures;
