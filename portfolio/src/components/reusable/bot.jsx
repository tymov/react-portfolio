import React from "react";
import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

export const Bot = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Toggle the hover state
    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    // Start/stop the animation when the hover state changes
    useEffect(() => {
        const interval = setInterval(() => {
            setIsHovered(prevState => !prevState);
        }, 1000); // Change the interval as needed
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed right-0 bottom-10 sm:hidden md:block"> {/* Hide on small screens */}
            <div
                className={`transform transition-transform duration-1000 ease-out ${isHovered ? "translate-y-1" : "translate-y-0"} transform-gpu`}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                <Spline scene="https://prod.spline.design/eXFpEPJmdV89mOn1/scene.splinecode" />
            </div>
        </div>
    );
};