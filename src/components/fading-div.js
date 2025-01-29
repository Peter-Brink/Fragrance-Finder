"use client";

import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FadingDiv = ({ section, text }) => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Get scroll position
    const fadeStart = 10 + section * window.innerHeight; // Start fading after 300px of scroll
    const fadeEnd = 600 + section * window.innerHeight; // Fully faded after 600px of scroll

    // Calculate opacity based on scroll position
    if (scrollPosition < fadeStart) {
      setOpacity(1);
    } else if (scrollPosition < fadeEnd) {
      setOpacity(1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart));
    } else {
      setOpacity(0);
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight * (section + 1),
      behavior: "smooth",
    });
  };

  return (
    <div
      className="absolute bottom-0 flex flex-col items-center mb-5 transition-opacity duration-0"
      style={{ opacity }}
    >
      <h2 className="text-2xl mb-4">{text}</h2>
      <ChevronDownIcon
        className="size-14 stroke-1 transform transition-all duration-500 hover:translate-y-1"
        onClick={scrollToSection}
      />
    </div>
  );
};

export default FadingDiv;
