import React from 'react'
import { Link } from "react-router-dom"

export default () => {
  return(
      <React.Fragment>
        {/* Desktop Menu */}
        <header className="default-header d-none d-sm-block">
          <div className="container">
            <div className="header-wrap">
              <div className="header-top d-flex justify-content-between align-items-center">
                <div className="logo"></div>
                <div className="main-menubar d-flex align-items-center">
                  <nav className="d-none d-sm-block">
                    <Link to="/">Home</Link>
                    <Link to="/proyectos">Proyectos</Link>
                    <a href="https://catacepedallanos.com/img/Catalina_Cepeda_Llanos_VisualCV_Resume.pdf" target="_blank">Currículum</a>
                    <a href="#footer">Contacto</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Mobile Menu */}
        <header className="default-header d-sm-none">
          <div className="container">
            <div className="header-wrap">
              <div className="header-top d-flex justify-content-between align-items-center">
                <div className="logo"></div>
                <div className="main-menubar d-flex align-items-center">
                  <nav className="hide">
                    <Link to="/">Home</Link>
                    <Link to="/proyectos">Proyectos</Link>
                    <a href="https://catacepedallanos.com/img/Catalina_Cepeda_Llanos_VisualCV_Resume.pdf" target="_blank">CV</a>
                    <a href="#footer">Contacto</a>
                  </nav>
                </div>
                <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment> 
  );
};