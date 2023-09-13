import React from 'react';

export default function SectionHeading({ sectionName, sectionHeading }) {
  return (
    <>
      <div className="solution">
        <p>{sectionName}</p>
        <span>{sectionHeading}</span>
      </div>
    </>
  );
}
