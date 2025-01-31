"use client";
import { useEffect, useState } from "react";

const ResultsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    const storedData = localStorage.getItem("resultsData");
    if (storedData) setData(JSON.parse(storedData));
  }, []);

  return (
    <section className="section bg-gradient-to-b from-myNavy via-myNavy to-myBlue text-white snap-start">
      <div
        className={`w-[100vw] h-[100vh] flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-5xl font-light mb-20">We've found your perfect match!</h1>
        <p className="max-w-[1200px]">
        { data ? JSON.stringify(data, null, 2) : "No data found" }
        </p>
        {/* Display your results data here */}
      </div>
    </section>
  );
};

export default ResultsPage;
