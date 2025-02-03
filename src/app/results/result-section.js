import { useEffect } from "react";
import NavArrowDown from "./nav-arrow-down";

const ResultSection = ({ fragrance, sectionIndex }) => {
  return (
    <section
      id={`section${sectionIndex}`}
      className="h-screen flex flex-col items-center justify-center bg-transparent"
    >
      <h1
        className="mb-10 text-[80px] font-light h-[120px] text-transparent bg-clip-text bg-gradient-to-r from-myResultsTextBlue to-myResultsTextPink"
        style={{ fontFamily: "Average" }}
      >
        {fragrance.name}
      </h1>
      <div className="flex items-center mb-8">
        <hr className="border-0 h-0.5 w-[250px] rounded-full bg-gradient-to-r from-myResultsTextBlue to-myResultsLineMiddle mr-6" />
        <h2
          className="text-myResultsLineMiddle opacity-80 text-4xl font-light"
          style={{
            fontFamily: "Average",
          }}
        >
          {sectionIndex}
        </h2>
        <hr className="border-0 h-0.5 w-[250px] rounded-full bg-gradient-to-r from-myResultsLineMiddle to-myResultsTextPink ml-6" />
      </div>
      <p className="text-white opacity-80 font-light mb-8 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-myResultsTextBlue to-myResultsTextPink">{`$${fragrance.price_range.min} - $${fragrance.price_range.max}`}</p>
      <p className="text-white text-3xl font-light opacity-80 max-w-[1000px] text-center mb-14">
        {fragrance.description}
      </p>
    </section>
  );
};

export default ResultSection;
