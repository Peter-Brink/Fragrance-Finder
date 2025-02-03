"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

const NavArrowDown = ({ section, text }) => {
  const scrollToSection = () => {
    console.log("scrolling to section ", section + 1);
    document.getElementById(`section${section + 1}`).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-0 flex flex-col items-center mb-5 opacity-70">
      <h2 className="sm:text-xl mb-2">{text}</h2>
      <ChevronDownIcon
        className="size-12 stroke-1 transform transition-all duration-500 hover:translate-y-1"
        onClick={scrollToSection}
      />
    </div>
  );
};

export default NavArrowDown;
