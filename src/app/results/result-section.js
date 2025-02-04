import NavArrowDown from "./nav-arrow-down";
import NavArrowUp from "./nav-arrow-up";

const ResultSection = ({ fragrance, sectionIndex, searchAgain }) => {

  return (
    <section
      id={`section${sectionIndex}`}
      className="h-screen relative flex flex-col items-center justify-center bg-transparent snap-start pl-10 pr-10"
    >
      {sectionIndex > 1 && <NavArrowUp section={sectionIndex} />}
      <h1
        className="text-[20px] xs:text-[30px] sm:text-[40px] md:text-[60px] font-light w-max-[1000px] inline-block break-words text-center text-transparent bg-clip-text bg-gradient-to-r from-myResultsTextBlue to-myResultsTextPink"
        style={{ fontFamily: "Average" }}
      >
        {fragrance.name}
      </h1>
      <div className="flex items-center mb-8 mt-4">
        <hr className="border-0 h-0.5 w-[100px] sm:w-[150px] md:w-[200px] rounded-full bg-gradient-to-r from-myResultsTextBlue to-myResultsLineMiddle mr-6" />
        <h2
          className="text-myResultsLineMiddle opacity-80 text-xl xs:text-2xl font-light"
          style={{
            fontFamily: "Average",
          }}
        >
          {sectionIndex}
        </h2>
        <hr className="border-0 h-0.5 w-[100px] sm:w-[150px] md:w-[200px] rounded-full bg-gradient-to-r from-myResultsLineMiddle to-myResultsTextPink ml-6" />
      </div>
      <p className="opacity-80 font-light mb-8 text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-myResultsTextBlue to-myResultsTextPink">{`$${fragrance.price_range.min} - $${fragrance.price_range.max}`}</p>
      <p className="text-white text-base sm:text-lg md:text-2xl font-light opacity-80 max-w-[1000px] text-center mb-14">
        {fragrance.description}
      </p>
      {sectionIndex < 5 && (
        <NavArrowDown
          section={sectionIndex}
          text={`Fragrance ${sectionIndex + 1}`}
        />
      )}
      {sectionIndex === 5 && <button
        className="bg-myButtonBlue text-white px-5 py-2 mt-10 rounded-full font-light text-lg transition-all duration-[900ms] hover:shadow-[0_0_40px_3px_rgba(0,21,205,0.7)]"
        onClick={searchAgain}
      >
        Search again
      </button>}
    </section>
  );
};

export default ResultSection;
