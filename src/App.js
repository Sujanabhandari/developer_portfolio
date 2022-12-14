import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainSection';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}

      <div className="container">
      <HeroSection />
       <MainSection />
      </div>

    </>

  );
}