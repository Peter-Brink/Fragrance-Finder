"use client";

import { Range } from "react-range";
import MoneyEmoji from "../../../public/emojis/money.svg";
import useUserInputStore from "@/store/useUserInputStore";

const PriceSelection = () => {
  const { priceRange, setSectionData } = useUserInputStore();


  return (
    <div className="flex flex-col w-[100%] mt-[100px] items-center justify-center p-8">
      <div className="w-[70vw] max-w-[1200px]">
        {/* Slider */}
        <Range
          step={10}
          min={0}
          max={1000}
          values={priceRange}
          onChange={(newValues) => setSectionData("priceRange", newValues)}
          renderTrack={({ props, children }) => (
            <div {...props} className="h-1 bg-white rounded-full relative">
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => {
            const { key, ...restProps } = props;
            delete restProps.key;

            return (
              <div
                key={index}
                {...restProps}
                className="flex flex-col relative items-center justify-center h-50 w-10 focus:outline-none"
              >
                <MoneyEmoji
                  viewBox="0 0 100 100"
                  className="w-[50%] h-auto mb-[150px] transition-transform"
                  style={{
                    transform: `scale(${
                      Math.round(priceRange[index] / 30) / 10 + 1
                    })`,
                  }}
                />
                <div className="w-4 h-10 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer shadow-md"></div>
              </div>
            );
          }}
        />
      </div>

      {/* Display Price Range */}
      <div className="mt-16 text-[50px] xs:text-[80px] sm:text-[90px] md:text-[100px] lg:text-[120px] font-medium">
        ${priceRange[0]} - ${priceRange[1] == 1000 ? "1000+" : priceRange[1]}
      </div>
    </div>
  );
};

export default PriceSelection;
