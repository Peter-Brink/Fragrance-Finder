import { useState } from "react";
import SelectionBlock from "./components/selection-block";
import EverydayEmoji from "../../../public/emojis/everyday.svg";
import NightEmoji from "../../../public/emojis/night.svg";
import BeachEmoji from "../../../public/emojis/beach.svg";
import SportEmoji from "../../../public/emojis/sport.svg";
import WorkEmoji from "../../../public/emojis/work.svg";
import DateEmoji from "../../../public/emojis/date.svg";
import useUserInputStore from "@/store/useUserInputStore";

const OccasionSelection = () => {
  const { occasionSelections, handleArraySelection } = useUserInputStore();


  const options = [
    {
      label: "Everyday",
      icon: <EverydayEmoji className="w-[50%] h-auto" />,
    },
    { label: "Night out", icon: <NightEmoji className="w-[50%] h-auto" /> },
    { label: "Beach day", icon: <BeachEmoji className="w-[50%] h-auto" /> },
    {
      label: "Sports/gym",
      icon: <SportEmoji className="w-[50%] h-auto" />,
    },
    {
      label: "Work/office",
      icon: <WorkEmoji className="w-[50%] h-auto pt-1" />,
    },
    { label: "Date night", icon: <DateEmoji className="w-[50%] h-auto" /> },
  ];

  return (
    <div className="flex flex-col items-center w-[100vw] mt-6">
      <div className="grid grid-cols-2  sm:grid-cols-3 gap-2 sm:gap-5 md:gap-10 lg:gap-x-20">
        {options.map(({ label, icon }) => (
          <SelectionBlock
            key={label}
            label={label}
            isSelected={Array.isArray(occasionSelections) && occasionSelections.includes(label)}
            onSelect={() => handleArraySelection("occasionSelections", label)}
          >
            {icon}
          </SelectionBlock>
        ))}
      </div>
    </div>
  );
};

export default OccasionSelection;
