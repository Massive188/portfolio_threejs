// src/App.jsx
import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import SplashScreen from './sections/SplashScreen.jsx';
import './Splashscreen.css'; // Make sure the styles are properly imported

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate a delay to show the splash screen
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fading out
      setTimeout(() => {
        setLoading(false); // Hide splash screen after fade-out
      }, 1000); // Wait for the fade-out transition to complete
    }, 2500); // Show splash screen for 2.5 seconds

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return (
    <main className="max-w-7xl mx-auto relative">
      
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <WorkExperience />
          <Contact />
          <Footer />
        </>
  
    </main>
  );
};

export default App;
