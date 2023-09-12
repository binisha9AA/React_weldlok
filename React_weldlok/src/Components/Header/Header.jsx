import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Components/Navigation/Navigation';

import {
  Homee,
  OurProducts,
  Customers,
  About,
  News,
  Footer,
} from './Components';

export const Header = () => {
  return (
    <>
      {/* <Navigation /> */}
      {/* <Routes>
        <Route path="./Pages/Homee.jsx" element={<Homee />} />
        <Route
          path="./Components/sections/OurProducts.jsx"
          element={<OurProducts />}
        />
        <Route
          path="./Components/sections/Customers.jsx"
          element={<Customers />}
        />
        <Route path="./Components/sections/About.jsx" element={<About />} />x
        <Route path="./Components/sections/News.jsx" element={<News />} />
        <Route path="./Components/Footer/Footer.jsx" element={<Footer />} />
      </Routes> */}
    </>
  );
};
