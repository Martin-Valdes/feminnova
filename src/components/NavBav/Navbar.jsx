import { Link, useLocation } from "react-router-dom";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


import "./NavBar.scss";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


const NavBar = () => {

  const { t, i18n } = useTranslation(); 
  const [selectedOption, setSelectedOption] = useState("Español");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOptionSelect = () => {
    const newLanguage = selectedOption === 'Español' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
    setSelectedOption(selectedOption === 'Español' ? 'English' : 'Español');
  };
  const handleOptionLeng = (leng) => {
    if(leng=='Espanol'){
      const newLeng = 'es';
      i18n.changeLanguage(newLeng);
    }else{
      i18n.changeLanguage('en');
    }
  };

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  const location = useLocation();
  const pathname = location.pathname;


  return (
    <header className={menuOpen ? 'headerContainer true' : 'headerContainer false'}>
      <div className="logo">
              <Link to="/">
                <img src="../../img/feminnovaLogo.png" alt=" logo company" />
                <p>feminnova</p>
              </Link>
            </div>
        <nav className="navStyle navbar navbar-expand-lg">
           
          <div className="containerHamb container-fluid">           
            <button onClick={toggleMenu} className="buttonColapse navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="toggler navbar-toggler-icon "><img src="../../img/icoColapse.png" alt="icon colapse" /></span>
              <span className="toggler "><img src="../../img/icoColapse.png" alt="" /></span>
            </button>
            <div className="offcanvas offcanvas-end me styleCanvas " id="menuLateral">
              <ul className="ulStyle navbar-nav"> 
                <li className="liStyle nav-item">
                  <Link className={pathname === '/' ? 'active' : 'aStyle nav-link'} to="/">{t("home")}</Link>
                </li>
                <li className="liStyle nav-item">
                  <Link className={pathname == '/services' ? 'active aStyle nav-link' : 'aStyle nav-link'} to="services">{t("services")}</Link>
                </li>
                <li className="liStyle nav-item">
                  <Link className={pathname == '/workshops' ? 'active aStyle nav-link' : 'aStyle nav-link'} to="workshops">{t("workshops")}</Link>
                </li>
                <li className="liStyle nav-item">
                  <Link className={pathname == '/metodwork' ? 'active' : 'aStyle nav-link'} to="metodwork">{t("methodology")}</Link>
                </li>
                <li className="liStyle nav-item">
                  <Link className={pathname == '/contact' ? 'active aStyle nav-link' : 'aStyle nav-link'} to="contact">{t("contact")}</Link>
                </li>
                <div className="dropContainer dropdown nav-item">
                  <a className="dropStyle btn btn-secondary "  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="traslationNow">
                      <p>{selectedOption}</p>
                      <img src="../../img/Vector.png" alt="image arrow lenguage" />
                    </div>
                  </a>
                  <ul className="menuDrop  dropdown-menu">
                    <li className="hoverElement" >
                      <a className="hoverElement dropdown-item" onClick={handleOptionSelect} href="#">{selectedOption === 'Español' ? 'English' : 'Español'}</a>
                    </li>
                  </ul>
                </div>
                <section className="lengCel">
                  <img onClick={() => handleOptionLeng('Espanol')} src="../../img/openmoji_flag-argentina.png" alt="Flag icon Lenguage spanish" />
                  <img onClick={() => handleOptionLeng('English')} src="../../img/openmoji_flag-united-states.png" alt="Flag icon Lenguage english" />
                </section>
              </ul>
            </div>
          </div>
        </nav>
    </header>
  );
};

export default NavBar;
