import React from 'react';
import rightArrow from '../../assets/images/left-arrow.svg';
import leftArrow from '../../assets/images/right-arrow.svg';

export const RedArrowButton = () => {
  return (
    <>
      <div className="feedback_buttons">
        <div className="feedback_btn">
          <img src={rightArrow} alt="" />
        </div>
        <div className="feedback_btn">
          <img src={leftArrow} alt="" />
        </div>
      </div>
    </>
  );
};
