import React, { Component } from 'react';
import AboutMe from './AboutMe';
import MyResume from './MyResume';
import MyWorks from './MyWorks';
import Contact from './Contact';

const MainSection = () => {

    return (
        <>
        {/* <i class="bi bi-list mobile-nav-toggle d-xl-none"></i> */}
        <main id="main">
        <AboutMe />
        <MyResume />
        <MyWorks />
        <Contact />

        </main>
        </>
    )

}

export default MainSection;