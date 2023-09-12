import React from 'react';
import '../../styles/styles.css';
import about from '../../assets/images/about img.svg';
import { Redbutton } from '../Buttons/redbutton';

export const About = () => {
  const userCount = [
    { id: 0, count: '60+', title: 'years of experineces' },
    { id: 1, count: '450+', title: 'years of experineces' },
    { id: 2, count: '800+', title: 'years of experineces' },
  ];
  return (
    <>
      <section className="sectiontwo" id="about">
        <div className="container">
          <div className="wrapper">
            <div className="about_content">
              <div className="image">
                <img src={about} alt="" />
              </div>
              <div className="about_text">
                <div className="about_title">
                  <h3>about weldlok</h3>
                  <h4>
                    Weldlok and Balltube: Trusted Australian brands for 60+
                    years, serving infrastructure, mining, industrial, civil,
                    and fabrication.
                  </h4>
                </div>
                <div className="about_paragraph">
                  <p>
                    We are specialists in the design and supply of high quality,
                    durable grating, industrial and modular handrail, steel
                    flooring, FRP flooring, and drainage grates and covers.
                  </p>
                </div>

                <div className="about_counts">
                  {userCount.map((item) => {
                    return (
                      <div key={item.id}>
                        <h2>{item.count}</h2>
                        <span>{item.title}</span>
                      </div>
                    );
                  })}
                </div>
                <Redbutton buttonText={'Learn More About Us'} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
