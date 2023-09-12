import React from 'react';
import arrow_ru from '../../assets/images/arrow-right-up-line.svg';

export const Redbutton = ({ buttonText }) => {
  return (
    <>
      <div className="about_buttons">
        <button className="btn find_more">
          <a href="">
            <img src={arrow_ru} alt="" />
            <p>{buttonText}</p>
          </a>
        </button>
      </div>
    </>
  );
};
