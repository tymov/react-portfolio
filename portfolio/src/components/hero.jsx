import React, { useState, useEffect, useContext } from "react";
import { Bot } from "./bot";
import { PrimaryButton } from "./buttons/priButton";
import SecondaryButton from "./buttons/secButton";
import Glitches from "./glitches";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [finalText, setFinalText] = useState(
    "Welcome to my portfolio. I'm Tymo Verhaegen, a dedicated professional in Application Development, with a particular emphasis on Front-End Development and UI/UX Design. Feel free to delve into my showcased projects below."
  );
  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText(finalText.substring(0, index));
      setIndex((index) => index + 1);
    }, 25); // Adjust typing speed as needed

    // Adjust delay before showing the button (in milliseconds)
    const buttonDelay = 500; // Changed to 1 second

    if (typedText === finalText) {
      clearInterval(interval);
      setTimeout(() => {
        setShowButton(true);
      }, buttonDelay);
    }

    return () => {
      clearInterval(interval);
      clearTimeout();
    };
  }, [index, finalText, typedText]);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleButtonClick = (sectionId) => {
    // Scroll to the specified section
    handleScrollToSection(sectionId);

    // Trigger animation of the spline component
    // You need to implement this part based on how the spline component is animated
    // For example, you can use CSS animations or JavaScript animation libraries
  };

  return (
    <div className="bg-cyberpunk-950 text-white min-h-screen flex flex-col relative">
      {/* Main content */}
      <div className="mx-10 px-10 flex flex-col justify-center md:justify-start w-full md:w-1/2 z-10 mt-40">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 uppercase header">
            <span className="header text-6xl">01</span>{" "}
            <span className="header text-6xl mx-5"> INTRO</span>
          </h1>
          <p className="text-lg mb-4">{typedText}</p>
          {showButton && (
            <div className="buttonContainer mt-3 pt-3">
              <PrimaryButton
                text="Projects"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
              <SecondaryButton
                text="Contact"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:block w-1/2 absolute right-0 top-0">
        <Bot />
      </div>
      {/* Bottom left Glitches component */}
      <div className="absolute bottom-0 right-0 mb-32 mx-10 text-right">
        <Glitches text="DATA CORRUPTED" textSize="0.8rem" color="white" rotation={0}/>
        <Glitches text="ERROR" textSize="0.8rem" color="gray" rotation={0}/>
      </div>
    </div>
  );
};
