// src/sections/SplashScreen.jsx

import React from 'react';
import '../Splashscreen.css'; // Assuming you've got a CSS file for styles

const SplashScreen = ({ fadeOut }) => {
  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
        <img className='w-50' src="public/assets/maninblack.png "></img>
    </div>
  );
};

export default SplashScreen;
