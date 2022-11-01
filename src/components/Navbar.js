/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, useState} from 'react';


const Navbar = () => {
  const [navState, setNavState] = useState(false);

    return (
      <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={() => {
          setNavState(!navState)
        }}></i>
        
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src="/bishalpun.jpeg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">Bishal Pun</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/bfasrious" className="twitter" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
              <a href="https://github.com/bishalgit" className="github" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram" target="_blank" rel="noreferrer"></i></a>
              <a href="#" className="google-plus"><i className="bi bi-whatsapp" target="_blank" rel="noreferrer"></i></a>
              <a href="https://www.linkedin.com/in/bishalpun/" className="linkedin" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><a href="#hero" className="nav-link scrollto active"><i className="bi bi-house"></i> <span>Home</span></a></li>
              <li><a href="#aboutme" className="nav-link scrollto"><i className="bi bi-person"></i> <span>About</span></a></li>
              <li><a href="#resume" className="nav-link scrollto"><i className="bi bi-file-person"></i> <span>Resume</span></a></li>
              <li><a href="#portfolio" className="nav-link scrollto"><i className="bi bi-journal-bookmark-fill"></i> <span>Portfolio</span></a></li>
              <li><a href="#services" className="nav-link scrollto"><i className="bi bi-server"></i> <span>Services</span></a></li>
              <li><a href="#contact" className="nav-link scrollto"><i className="bi bi-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </div>
      </header>
      </>
    )
  
}
export default Navbar;
