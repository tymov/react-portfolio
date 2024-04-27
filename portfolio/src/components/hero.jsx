import { useState, useEffect } from "react";
import { PrimaryButton } from "./buttons/priButton";
import SecondaryButton from "./buttons/secButton";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  const [finalText, setFinalText] = useState(
    "Welcome to my portfolio. I'm Tymo Verhaegen, a dedicated professional in Application Development, with a particular emphasis on Front-End Development and UI/UX Design. Feel free to delve into my showcased projects below."
  );

  const [typedText, setTypedText] = useState("");
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

  return (
    <div className="text-gray-800 dark:text-white pb-4 px-10 lg:mb-40">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-4xl font-bold mb-4 uppercase header text-center md:text-start">
              <span className="header text-4xl lg:text-6xl">01</span>
              <span className="header text-4xl lg:text-6xl mx-5">INTRO</span>
            </h1>

            <p className="md:text-lg 2xl:text-2xl mb-4 text-center md:text-start px-3 md:px-0">
              {typedText}
            </p>

            {showButton && (
              <div className="buttonContainer mt-4 pt-4 flex md:justify-start md:items-start justify-center items-center">
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

        <div className="w-full md:w-1/2">
          <div className="hidden md:flex justify-center">
            <img
              src="/Tymo-removebg-preview.png"
              alt="Tymo"
              className="max-w-full max-h-full rounded-xl scale-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
