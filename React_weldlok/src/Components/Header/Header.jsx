import React, { useEffect } from 'react'; 
import logo from '../../assets/images/logo.svg';
import phone from '../../assets/images/phone.svg';
import { Redbutton } from '../Buttons/redbutton';
import rightArrow from '../../assets/images/arrow-right-up-line.svg';
import industr from '../../assets/images/industrial img.png';
import industrLogo from '../../assets/images/Industrial.svg';
import civil from '../../assets/images/Civil.svg';
import arch from '../../assets/images/Architectural.svg';

export const Header = () => {
  const navbar = [
    {
      id: 1, // Unique IDs for each item
      navlink: 'Home',
    },
    {
      id: 2,
      navlink: 'Our Products',
    },
    {
      id: 3,
      navlink: 'Customers',
    },
    {
      id: 4,
      navlink: 'About us',
    },
    {
      id: 5,
      navlink: 'News',
    },
    {
      id: 6,
      navlink: 'Contact Us',
    },
  ];

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
                <div className="mid_nav">
                  <ul className="nav-menu" ref={navMenuRef}>
                    {navbar.map((nav) => (
                      <li key={nav.id}>
                        <a href="" className="nav-link">
                          {nav.navlink}
                        </a>
                      </li>
                    ))}
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
        <div className="hero_section">
          <h1>High quality, reliable and proven products and systems</h1>
          <p>
            The Weldlok brand guarantees the right solution for all customers.
          </p>

          <Redbutton buttonText={'Find Out More'} />
        </div>
        <div className="grid_cards">
          <div className="container">
            <div className="grid-container">
              <div className="card">
                <div className="card_title">
                  <div className="card_name">
                    <img src={industrLogo} alt="" className="card_logo" />
                    <h3>industrial</h3>
                    <img src={rightArrow} alt="arrow" className="card_arrow" />
                  </div>

                  <p>
                    We ensure our clients’ success by delivering the highest
                    quality products.
                  </p>
                </div>
                <div className="card_image">
                  <img src={industr} alt="" />
                </div>
              </div>
              <div className="card">
                <div className="card_title">
                  <div className="card_name">
                    <img src={civil} alt="" className="card_logo" />
                    <h3>Civil</h3>
                    <img src={rightArrow} alt="arrow" className="card_arrow" />
                  </div>

                  <p>
                    We ensure our clients’ success by delivering the highest
                    quality products.
                  </p>
                </div>
                <div className="card_image">
                  <img src={industr} alt="" />
                </div>
              </div>
              <div className="card">
                <div className="card_title">
                  <div className="card_name">
                    <img src={arch} alt="" className="card_logo" />
                    <h3>aRCHITECTURAL</h3>
                    <img src={rightArrow} alt="arrow" className="card_arrow" />
                  </div>

                  <p>
                    We ensure our clients’ success by delivering the highest
                    quality products.
                  </p>
                </div>
                <div className="card_image">
                  <img src={industr} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
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
