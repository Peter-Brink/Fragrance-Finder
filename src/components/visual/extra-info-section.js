import { useState } from "react";

const ExtraInfoSection = () => {
  const [extraDetails, setExtraDetails] = useState("");

  return (
    <div className="w-[100vw] pl-5 pr-5 xs:pl-10 xs:pr-10 max-w-[1000px] relative flex-col flex-grow mb-40 mt-10">
      <input
        type="text"
        className="w-[100%] h-[50px] rounded-[30px] text-lg placeholder:text-size-lg sm:text-2xl sm:placeholder:text-size:2xl text-gray-600 p-5 sm:p-8 border outline-none focus:ring-2 focus:ring-gray-700 resize-none"
        placeholder="Tell us"
        onChange={(e) => setExtraDetails(e.target.value)}
      ></input>
      <button className="text-white text-lg xs:text-2xl font-light h-14 sm:h-16 w-[250px] xs:w-[300px] mt-20 rounded-[30px] bg-gradient-to-r from-myNavy to-myBlue transition-all duration-[900ms] hover:shadow-[0_0_40px_3px_rgba(0,21,205,0.7)]">
        find my fragrance
      </button>
    </div>
  );
};

export default ExtraInfoSection;
