'use client';

import { useState } from "react";
import useUserInputStore from "@/store/useUserInputStore";
import { makeApiCall } from "@/utils/api-connector";
import ErrorPopup from "../reusable/error-popup";
import { checkSectionData } from "@/utils/check-section-data";
import Lottie from "lottie-react";
import loadingAnimation from "../../../public/animations/loading-animation.json";

const ExtraInfoSection = ({ navigateToResults }) => {
  const [loading, setLoading] = useState(false);
  const { setSectionData } = useUserInputStore();
  const [error, setError] = useState(null);

  const handleApiCall = async () => {
    const dataCheck = checkSectionData();
    if (!dataCheck) {
      return;
    }
    setLoading(true);
    const result = await makeApiCall();
    setLoading(false);
    if (result === 200) {
      navigateToResults();
    } else {
      setError("Failed to fetch data");
    }
  };

  const handleInputChange = (e) => {
    setSectionData("extraDetails", e.target.value); // Updating state here
  };

  return (
    <div className="w-[100vw] pl-5 pr-5 xs:pl-10 xs:pr-10 max-w-[1000px] relative flex-col items-center justify-center mt-10">
      <input
        type="text"
        className="w-[100%] h-[50px] rounded-[30px] text-lg placeholder:text-size-lg sm:text-2xl sm:placeholder:text-size:2xl text-gray-600 p-5 sm:p-8 border outline-none focus:ring-2 focus:ring-gray-700 resize-none"
        placeholder="Tell us"
        onChange={handleInputChange}
      ></input>
      <button
        className="text-white text-lg xs:text-2xl font-light h-14 sm:h-16 w-[250px] xs:w-[300px] mt-20 rounded-[30px] bg-gradient-to-r from-myNavy to-myBlue transition-all duration-[900ms] hover:shadow-[0_0_40px_3px_rgba(0,21,205,0.7)]"
        onClick={handleApiCall}
      >
        find my fragrance
      </button>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 transition-all duration-1000 ${
          loading
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-4 invisible"
        }`}
      >
        <div className="bg-myNavy p-6 w-[700px] h-[500px] rounded-[30px] shadow-lg text-center">
          <h1 className="text-myGrey opacity-80 mt-5 text-3xl font-light">
            Finding your perfect fragrance
          </h1>
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            className="h-[85%]"
          />
        </div>
      </div>
      {error && <ErrorPopup message={error} onClose={() => setError(null)} />}
    </div>
  );
};

export default ExtraInfoSection;
