import React from 'react';
import { Redbutton } from '../Buttons/redbutton';
import ViewProdcutButton from '../Buttons/viewProdcutButton';
import ductile from '../../assets/images/ductile solution.png';
import benefit from '../../assets/images/benefit of alumninium.png';
import stair from '../../assets/images/understanding stair.png';
import SectionHeading from '../sectionHeading/SectionHeading';
import articleHeading from '../../assets/images/artticle headling.png';

export const News = () => {
  const events = [
    {
      id: 0,
      newImg: ductile,
      eventName: 'civil',
      eventDate: 'July 19, 2023',
      eventTitle: 'Ductile Solutions For Civil Drainage',
    },
    {
      id: 1,
      newImg: benefit,
      eventName: 'Architectural',
      eventDate: 'JULY 19, 2023',
      eventTitle: 'The Benefits Of Aluminium Stair Treads',
    },
    {
      id: 2,
      newImg: stair,
      eventName: 'industrial',
      eventDate: 'JULY 19, 2023',
      eventTitle: 'Understanding Stair Treads',
    },
  ];

  return (
    <>
      <section className="sectionseven" id="news">
        <div className="container">
          <div className="wrapper">
            <div className="latest_news">
              <div className="top_news_section">
                <SectionHeading
                  sectionName={'News and events'}
                  sectionHeading={'Our Latest News'}
                />
                <Redbutton buttonText={'View All Case Studies'} />
              </div>
              <div className="bottom_news_section">
                <div className="news_headline">
                  <div className="article_image">
                    <img src={articleHeading} alt="" />
                  </div>
                  <div className="article_headline_texts">
                    <div className="event_date">
                      <h4>industrial</h4>
                      <p>JULY 19, 2023</p>
                    </div>
                    <article className="article_title">
                      The Role Of Effective Grates And Drain Covers In Floods &
                      Heavy Rain
                    </article>
                    <div className="article_description">
                      {' '}
                      Floods are the most expensive disaster in Australia,
                      causing social, economic, and environmental disruptions.
                      The direct costs associated with floods estimated over the
                      period...
                    </div>
                    <ViewProdcutButton productText={'Learn More'} />
                  </div>
                </div>
                <div className="news_articles">
                  {events.map((event) => (
                    <div className="news_events" key={event.id}>
                      <div className="news_image">
                        <img src={event.newImg} alt="" />
                      </div>
                      <div className="event_information">
                        <div className="event_date">
                          <h4>{event.eventName}</h4>
                          <p>{event.eventDate}</p>
                        </div>
                        <div className="event_title">
                          <p>{event.eventTitle}</p>
                        </div>
                        <ViewProdcutButton productText={'View all News'} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
