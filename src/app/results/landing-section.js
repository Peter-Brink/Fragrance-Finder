import React, { useEffect, useState } from "react";
import NavArrowDown from "./nav-arrow-down";

const LandingSection = ({ overview, onClick, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  });

  return (
    <section
      id="section0"
      className={`h-screen relative snap-start flex flex-col gap-4 items-center justify-center ${className}`}
    >
      <h1 className="text-6xl font-light h-20 text-transparent bg-clip-text bg-gradient-to-r from-myTextBlue to-myTextPink">
        Explore your fragrances
      </h1>
      <p className="mb-10 text-lg text-myGrey opacity-80 font-light max-w-[1000px] text-center">
        {overview}
      </p>
      <button
        className="bg-myButtonBlue text-white px-5 py-2 rounded-full font-medium text-lg"
        onClick={onClick}
      >
        Explore fragrances
      </button>
    </section>
  );
};

export default LandingSection;
