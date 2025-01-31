import { useState } from "react";
import SelectionBlock from "./components/selection-block";
import WoodyEmoji from "../../../public/emojis/woody.svg";
import FruityEmoji from "../../../public/emojis/fruity.svg";
import FloralEmoji from "../../../public/emojis/floral.svg";
import SpicyEmoji from "../../../public/emojis/spicy.svg";
import FreshEmoji from "../../../public/emojis/fresh.svg";
import ChooseEmoji from "../../../public/emojis/choose.svg";
import useUserInputStore from "@/store/useUserInputStore";


const FlavourSelection = () => {
  const { scentSelections, handleArraySelection } = useUserInputStore();


  const options = [
    { label: "Woody", icon: <WoodyEmoji className="w-[50%] h-auto" /> },
    { label: "Fruity", icon: <FruityEmoji className="w-[50%] h-auto" /> },
    { label: "Floral", icon: <FloralEmoji className="w-[50%] h-auto" /> },
    {
      label: "Spicy",
      icon: <SpicyEmoji className="w-[50%] h-auto" />,
    },
    {
      label: "Fresh",
      icon: <FreshEmoji className="w-[50%] h-auto" />,
    },
    { label: "Choose for me", icon: <ChooseEmoji className="w-[50%] h-auto" /> },
  ];

  return (
    <div className="flex flex-col items-center w-[100vw] mt-6">
      <div className="grid grid-cols-2  sm:grid-cols-3 gap-2 sm:gap-5 md:gap-10 lg:gap-x-20">
        {options.map(({ label, icon }) => (
          <SelectionBlock
            key={label}
            label={label}
            isSelected={scentSelections.includes(label)}
            onSelect={() => handleArraySelection("scentSelections", label)}
          >
            {icon}
          </SelectionBlock>
        ))}
      </div>
    </div>
  );
};

export default FlavourSelection;
