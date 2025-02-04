'use client';
import { useEffect, useState } from "react";
import ResultSection from "./result-section";
import LandingSection from "./landing-section";
import { useRouter } from "next/navigation";

const ResultsPage = () => {
  const [overview, setOverview] = useState("");
  const [fragrances, setFragrances] = useState([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [fade, setFade] = useState(false);
  const router = useRouter();

  const handleFade = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSection(1);
      setFade(true);
    }, 500);
  };

  useEffect(() => {
    setFade(true);
    const storedData = localStorage.getItem("resultsData");
    if (storedData) {
      const data = JSON.parse(storedData);
      setOverview(data.overview);
      setFragrances(data.fragrances);
    }
  }, []);

  const searchAgain = () => {
    router.push("/");
  };

  return (
    <div className="h-screen bg-white font-sans overflow-hidden bg-gradient-to-b from-myNavy via-myNavy to-myBlue">
      <div>
        <LandingSection
          overview={overview}
          onClick={handleFade}
          className={`transition-opacity duration-1000 ease-in-out ${
            fade && currentSection == 0 ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div
        className={`absolute inset-0 overflow-scroll snap-y snap-mandatory transition-opacity duration-[1500ms] ease-in-out ${
          fade && currentSection == 1 ? "opacity-100 z-10" : "opacity-0 z-[-10]"
        }`}
      >
        {currentSection == 1 && fragrances.length > 0 && (
          <div>
            {fragrances.map((fragrance, index) => {
              return (
                <ResultSection
                  key={index}
                  fragrance={fragrance}
                  sectionIndex={index + 1}
                  searchAgain={searchAgain}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
