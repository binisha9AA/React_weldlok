import React from 'react';
import arrowRightUp from '../../assets/images/arrow-right-up-line.svg';

export default function ViewProdcutButton({ productText }) {
  return (
    <>
      <div className="view_product">
        <a href="">
          <img src={arrowRightUp} alt="" />
          <span>{productText} </span>
        </a>
      </div>
    </>
  );
}
