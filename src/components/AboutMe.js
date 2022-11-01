import React, { Component, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
        <section id="about" className="about">
            <div className="container">
                <div className="row section-title">
                    <div className='col'>
                        <h2>About</h2>
                        <p>I love adventures. And my career has also been a very good long adventure so far.
                            I started as a game developer and currently as an Odoo developer. One time I was crimping ethernet wires and setting up on-premise servers. Another time I was implementing ERP system to local schools and businesses. Although I did lot of adventures in my career, some things always remained constant:
                             high quality of work, a little bit of fun, and some innovative ideas along the way.
                            </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="/bishalpun.jpeg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Software Engineer &amp; Game Developer.</h3>
                        <p className="fst-italic">
                            Software Engineer with 8 years of experience in Software Development.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>4 July 1994</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.bishalpun.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+49 1520 7113143</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Magdeburg, Germany</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>28</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelors</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>bishalpun2013@gmail.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                        I am an innovative professional who has been consistently praised as quality-oriented by my co-workers and management. Over the course of my 7-years career, I’ve developed a skill set directly relevant to the Full Stack Engineer.
                        </p>
                    </div>
                </div>

            </div>
        </section>
        <section id="skills" className="skills section-bg">
        <div className="container">
  
          <div className="section-title">
            <h2>Skills</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
  
          <div className="row skills-content">
  
            <div className="col-lg-6" data-aos="fade-up">
  
              <div className="progress">
                <span className="skill">Odoo <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" style={{ width: '90%' }} aria-valuemax="100"></div>
                </div>
                
              </div>
  
              <div className="progress">
                <span className="skill">Python <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" style={{ width: '90%' }} aria-valuemax="100"></div>
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">JavaScript <i className="val">95%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" style={{ width: '90%' }} aria-valuemax="100"></div>
                </div>
              </div>
  
            </div>
  
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
  
              <div className="progress">
                <span className="skill">PHP <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" style={{ width: '90%' }} aria-valuemax="100"></div>
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">Unity <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" style={{ width: '90%' }} aria-valuemax="100"></div>
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">Photoshop <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" style={{ width: '90%' }} aria-valuemax="100"></div>
                </div>
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
      </>
    )

}

export default AboutMe;