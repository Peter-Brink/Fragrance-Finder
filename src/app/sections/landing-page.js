'use client';
import FadingDiv from "@/components/reusable/nav-arrow-down";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  });

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-myNavy via-myNavy to-myBlue">
      <section
        id="section0"
        className={`section transition-opacity duration-[1500ms] ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="absolute top-5 right-5 text-xs sm:text-sm flex items-center gap-1">
          Built with ❤️ by{" "}
          <a
            href="https://github.com/Peter-Brink"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1"
          >
            Petrus <FaGithub className="text-xl" />
          </a>
        </p>
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl font-light mb-5">
            Your fragrance helps you
          </h1>
          <h1 className="text-6xl sm:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-myTextBlue to-myTextPink">
            Stand Out
          </h1>
        </div>
        <FadingDiv section={0} text={"Let us help you choose it."} />
      </section>
    </div>
  );
};

export default LandingPage;
