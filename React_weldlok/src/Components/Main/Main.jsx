import React from 'react';
import { About } from '../sections/About';
import { OurProducts } from '../sections/OurProducts';
import { Customers } from '../sections/Customers';
import { FeaturedProducts } from '../sections/FeaturedProducts';
import OurBrochures from '../sections/OurBrochers';
import { News } from '../sections/News';

const Main = () => {
  return (
    <main>
      <About />
      <OurProducts />
      <Customers />
      <FeaturedProducts />
      <OurBrochures />
      <News />
    </main>
  );
};

export default Main;
