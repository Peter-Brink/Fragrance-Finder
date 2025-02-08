'use client';
import React, { useEffect, useState } from "react";

const LandingSection = ({ overview, onClick, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  });

  return (
    <section
      id="section0"
      className={`h-[100dvh] relative snap-start flex flex-col gap-4 items-center justify-center pr-4 pl-4 ${className}`}
    >
      <h1 className="text-4xl md:text-6xl font-light p-8 inline-block break-words text-center text-transparent bg-clip-text bg-gradient-to-r from-myTextBlue to-myTextPink">
        Explore your fragrances
      </h1>
      <p className="mb-10 text-base sm:text-lg md:text-2xl text-myGrey opacity-80 font-light max-w-[1000px] text-center">
        {overview}
      </p>
      <button
        className="bg-myButtonBlue text-white px-5 py-2 rounded-full font-medium text-lg transition-all duration-[900ms] hover:shadow-[0_0_40px_3px_rgba(0,21,205,0.7)]"
        onClick={onClick}
      >
        Explore fragrances
      </button>
    </section>
  );
};

export default LandingSection;
