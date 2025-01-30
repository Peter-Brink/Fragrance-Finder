import FadingDiv from "@/components/visual/components/nav-arrow-down";
import { FaGithub } from "react-icons/fa";

const LandingPage = () => {
  return (
    <section
      id="section0"
      className="section justify-center snap-start bg-gradient-to-b from-myNavy via-myNavy to-myBlue"
    >
      <p className="absolute top-5 right-5 text-white text-xs sm:text-sm flex items-center gap-1">
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
        <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl font-sans font-light text-white mb-5">
          Your fragrance helps you
        </h1>
        <h1 className="text-6xl sm:text-8xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-r from-myTextBlue to-myTextPink">
          Stand Out
        </h1>
      </div>
      <FadingDiv section={0} text={"Let us help you choose it."} />
    </section>
  );
};

export default LandingPage;
