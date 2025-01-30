"use client";

import { useState } from "react";
import { Range } from "react-range";
import MoneyEmoji from "../../../public/emojis/money.svg";

const PriceSelection = () => {
  const [values, setValues] = useState([400, 700]); // Initial range

  return (
    <div className="flex flex-col w-[100%] items-center justify-center h-screen p-8">
      <div className="relative w-[70vw] max-w-[1200px]">
        {/* Slider */}
        <Range
          step={10}
          min={0}
          max={1000}
          values={values}
          onChange={(newValues) => setValues(newValues)}
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
                      Math.round(values[index] / 30) / 10 + 1
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
      <div className="mt-28 text-white text-[50px] xs:text-[80px] sm:text-[100px] md:text-[140px] lg:text-[160px] font-medium">
        ${values[0]} - ${values[1] == 1000 ? "1000+" : values[1]}
      </div>
    </div>
  );
};

export default PriceSelection;
