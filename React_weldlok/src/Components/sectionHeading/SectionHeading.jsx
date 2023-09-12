import React from 'react';

export default function SectionHeading({ sectionName, sectionHeading }) {
  return (
    <>
      <div class="solution">
        <p>{sectionName}</p>
        <span>{sectionHeading}</span>
      </div>
    </>
  );
}
