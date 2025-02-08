"use client";

import { ChevronUpIcon } from "@heroicons/react/24/outline";

const NavArrowUp = ({ section, text }) => {
  const scrollToSection = () => {
    document.getElementById(`section${section - 1}`).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute top-0 flex flex-col items-center mt-2 transition-opacity duration-0">
      <h2 className="sm:text-2xl md:text-2xl mb-4">{text}</h2>
      <ChevronUpIcon
        className="size-6 sm:size-8 stroke-1 transform transition-all duration-500 hover:translate-y-1"
        onClick={scrollToSection}
      />
    </div>
  );
};

export default NavArrowUp;
