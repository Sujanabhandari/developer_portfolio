// import React, { Component } from 'react'
import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";

import React, { Component } from 'react'
const HeroSection = () => {

  const typed = useRef(null);
  useEffect(() => {
    const typedString = new Typed(typed.current, {
      strings: ["Full Stack Developer", "Freelancer", "Photographer", "Singer", "And Very Good Husband"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typedString.destroy();
    };
  }, []);

    return (
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundImage: "url(/bishal.jpg)"}} >
        <div className="hero-container" data-aos="fade-in">
          <h1>Bishal Pun</h1>
          <p>I'm <span className="typed" ref={typed}></span></p>
        </div>
      </section>

    )
  
}

export default HeroSection;

