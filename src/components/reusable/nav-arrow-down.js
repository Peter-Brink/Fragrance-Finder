"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FadingDiv = ({ section, text }) => {

  const scrollToSection = () => {
    document.getElementById(`section${section + 1}`).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-0 flex flex-col items-center mb-5 transition-opacity duration-0">
      <h2 className="sm:text-2xl md:text-2xl mb-4">{text}</h2>
      <ChevronDownIcon
        className="size-14 stroke-1 transform transition-all duration-500 hover:translate-y-1"
        onClick={scrollToSection}
      />
    </div>
  );
};

export default FadingDiv;
