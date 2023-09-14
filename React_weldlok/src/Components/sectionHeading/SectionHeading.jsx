import React from 'react';

export default function SectionHeading({ sectionName, sectionHeading }) {
  return (
    <>
      <div className="solution">
        <p className="section--sub--name">{sectionName}</p>
        <span className="sub__name__elem">{sectionHeading}</span>
      </div>
    </>
  );
}
