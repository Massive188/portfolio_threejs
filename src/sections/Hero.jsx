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
      }, 50); // Type speed
    };

    // Start the animation with the first title
    typeTitle(profile.titles[currentTitleIndexRef.current]);

    return () => {
      clearInterval(eraseInterval);
      clearInterval(typeInterval);
    };
  }, []); // Empty dependency array ensures effect runs once on mount

  return (
    <section>
      <header className="relative w-full h-screen overflow-hidden">
        <div className="p-5 vh-100 text-center bg-image">
          <div className="d-flex justify-content-center align-items-center h-100 w-100">
            <div className="text-white">
              <img
                className="rounded-circle border-5 mx-auto mb-5 w-50"
                src={profile.imageUrl}
                alt="avatar"
                loading="lazy"
                decoding="async"
              />
              <h1 className="mb-3">
                <strong>
                  {profile.firstname} {profile.lastname}
                </strong>
              </h1>

              <h4 className="mb-4">{displayedTitle}</h4>

              <div className="d-flex justify-content-center gap-4">
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                >
                  <SiLinkedin size={30} />
                </a>
                |
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                >
                  <SiGithub size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Hero;
