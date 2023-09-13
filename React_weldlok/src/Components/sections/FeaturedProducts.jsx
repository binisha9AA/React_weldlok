import React from 'react';
import { RedArrowButton } from '../Buttons/RedArrowButton';
import man from '../../assets/images/man-pfp.png';
import { Redbutton } from '../Buttons/redbutton';
import projectImg from '../../assets/images/project.png';
import ViewProdcutButton from '../Buttons/viewProdcutButton';
import arrowRight from '../../assets/images/arrow-right-up-line.svg';

export const FeaturedProducts = () => {
  return (
    <>
      <section className="sectionfive">
        <div className="container">
          <div className="wrapper">
            <div className="s5_wrapper">
              <div className="s5">
                <div className="feedback_text">
                  <div
                    className="left_feedback_card
                        "
                  >
                    <h3>Testimonials</h3>
                    <p>Your Feedback Drives Us Forward</p>
                    <span>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam,
                    </span>
                  </div>
                  <RedArrowButton />
                </div>
                <div className="feedback_card">
                  <div className="feedback_content">
                    <div className="testimonials">
                      <h4>
                        "I have been a customer of Weldlok for over 5 years now,
                        in this time I have been nothing but pleased with the
                        service and quality. Weldlok always goes above and
                        beyond my expectations.
                      </h4>
                    </div>
                    <div className="feedback_profile">
                      <div className="man_photo">
                        <img src={man} alt="" />
                      </div>
                      <div className="man_intro">
                        <h4>PAUL MIRABITO</h4>
                        <p>Murray Engineering</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="s5_middle_section">
                <div className="background_s5_img">
                  <div className="s5_left">
                    <h3>
                      Elevate Your Infrastructure{' '}
                      <span>with our Premium Solutions!</span>
                    </h3>
                  </div>
                  <div className="s5_right">
                    <button class="btn find_more">
                      <a href="">
                        <img src={arrowRight} alt="" />
                        <p>Request A Quote</p>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="s5_bottom_section">
                <div className="featured_projects">
                  <div className="project_top">
                    <h3>Case studies</h3>
                    <p>Featured Project</p>
                  </div>
                  <Redbutton buttonText={'View All Case Studies'} />
                </div>
                <div className="featured_projectTwo">
                  <div className="project_image">
                    <img src={projectImg} alt="" />
                  </div>
                  <div className="project_description">
                    <div className="project_title">
                      <h2>Central Taiwan Innovation & Research Park</h2>
                    </div>
                    <div className="project_location">
                      <div className="client_location">
                        <h2>Location:</h2>
                        <p>Nantou, Taiwan</p>
                      </div>
                      <div className="client_info">
                        <h2>Clients</h2>
                        <p>Central Taiwan Innovation & Research Park</p>
                      </div>
                    </div>
                    <div className="project_paragraph">
                      <p>
                        Bio-architecture Formosana, an architectural firm known
                        for their commitment to eco-friendly buildings, achieved
                        the highest grade of Taiwan’s green building label with
                        project.{' '}
                      </p>
                    </div>
                    <ViewProdcutButton productText={'Read Full Case Study '} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
