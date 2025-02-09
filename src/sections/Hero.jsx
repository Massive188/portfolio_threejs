import React, { useState, useEffect, useRef } from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const profile = {
  imageUrl: "./coolpink.jpeg", // Replace with your image URL
  firstname: "Allendry",
  lastname: "Roque",
  titles: ["Software Developer", "Web Designer", "Problem Solver", "Creative Thinker"],
};

const Hero = () => {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const currentTitleIndexRef = useRef(0);

  useEffect(() => {
    let eraseInterval;
    let typeInterval;

    const eraseTitle = (title) => {
      let i = title.length;
      eraseInterval = setInterval(() => {
        if (i >= 0) {
          setDisplayedTitle(title.substring(0, i));
          i--;
        } else {
          clearInterval(eraseInterval);
          // Move to next title and type it
          currentTitleIndexRef.current = (currentTitleIndexRef.current + 1) % profile.titles.length;
          const nextTitle = profile.titles[currentTitleIndexRef.current];
          typeTitle(nextTitle);
        }
      }, 50); // Erase speed
    };

    const typeTitle = (title) => {
      let i = 0;
      typeInterval = setInterval(() => {
        setDisplayedTitle(title.substring(0, i + 1));
        i++;
        if (i > title.length) {
          clearInterval(typeInterval);
          // Wait 2 seconds before erasing
          setTimeout(() => eraseTitle(title), 2000);
        }
      }, 100); // Typing speed
    };

    // Start the typing effect with the first title
    typeTitle(profile.titles[currentTitleIndexRef.current]);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(eraseInterval);
      clearInterval(typeInterval);
    };
  }, []);

  return (
    <div className="hero">
      <img src={profile.imageUrl} alt={`${profile.firstname} ${profile.lastname}`} />
      <h1>{profile.firstname} {profile.lastname}</h1>
      <h2>{displayedTitle}</h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/allendryroque" target="_blank" rel="noopener noreferrer">
          <SiLinkedin />
        </a>
        <a href="https://github.com/allendryroque" target="_blank" rel="noopener noreferrer">
          <SiGithub />
        </a>
      </div>
    </div>
  );
};

export default Hero;
