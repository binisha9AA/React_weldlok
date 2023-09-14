import React, { useEffect } from 'react';
import logo from '../../assets/images/logo.svg';
import phone from '../../assets/images/phone.svg';
import arrowDow from '../../assets/images/arrowDown.svg';
import { HeroSection } from './HeroSection';

export const Header = () => {
  // Initialize hamburger and navMenu as useRef
  const hamburgerRef = React.useRef(null);
  const navMenuRef = React.useRef(null);

  // Use useEffect to add event listeners when the component mounts
  useEffect(() => {
    const mobileMenu = () => {
      hamburgerRef.current.classList.toggle('active');
      navMenuRef.current.classList.toggle('active');
    };

    hamburgerRef.current.addEventListener('click', mobileMenu);

    const navLink = document.querySelectorAll('.nav-link');
    navLink.forEach((n) => n.addEventListener('click', closeMenu));

    function closeMenu() {
      hamburgerRef.current.classList.remove('active');
      navMenuRef.current.classList.remove('active');
    }

    const mobileNav = document.querySelector('.mobile_nav');
    hamburgerRef.current.addEventListener('click', function () {
      mobileNav.classList.toggle('show-mobile-nav');
    });

    // Clean up the event listener when the component unmounts
    return () => {
      hamburgerRef.current.removeEventListener('click', mobileMenu);
      navLink.forEach((n) => n.removeEventListener('click', closeMenu));
    };
  }, []);

  return (
    <>
      <div className="site">
        <header>
          <div className="container">
            <div className="navigation">
              <div className="logo">
                <a href="#">
                  <img src={logo} alt="" />
                </a>
              </div>
              <nav className="nav">
                <div class="mid_nav">
                  <ul class="nav-menu">
                    <li>
                      <a href="" class="nav-link">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#our_products" class="nav-link">
                        Our Products <img src={arrowDow} />
                      </a>
                    </li>
                    <li>
                      <a href="" class="nav-link">
                        Customers
                        <img src={arrowDow} />
                      </a>
                    </li>
                    <li>
                      <a href="#about" class="nav-link">
                        About us
                        <img src={arrowDow} />
                      </a>
                    </li>

                    <li>
                      <a href="#news" class="nav-link">
                        News
                        <img src={arrowDow} />
                      </a>
                    </li>
                    <li>
                      <a href="#footer" class="nav-link">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="right_nav">
                  <div className="phone_logo">
                    <img src={phone} alt="" />
                  </div>
                  <div className="phone_number">
                    <p>1800 935 356</p>
                  </div>
                </div>
              </nav>
              <div className="mobile_nav">
                <div className="mobile_nav_menu">
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="#our_products">
                        Our Products{' '}
                        <img src="../images/arrowDown.svg" alt="down arrow" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Customers
                        <img src="../images/arrowDown.svg" alt="down arrow" />
                      </a>
                    </li>
                    <li>
                      <a href="#about">
                        About us
                        <img src="../images/arrowDown.svg" alt="down arrow" />
                      </a>
                    </li>

                    <li>
                      <a href="#news" className="nav-link">
                        News
                        <img src="../images/arrowDown.svg" alt="down arrow" />
                      </a>
                    </li>
                    <li>
                      <a href="#footer" className="nav-link">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mobile_nav_phone">
                  <div className="mobile_nav_ph">
                    <img src={phone} alt="" />
                  </div>
                  <div className="mobile_nav_no">
                    <p>1800 935 356</p>
                  </div>
                </div>
              </div>
              <div className="hamburger" ref={hamburgerRef}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </div>
        </header>
        {/* hero section starts here  */}

        <HeroSection />
      </div>

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
