'use client';

import SelectionBlock from "../reusable/selection-block";
import SmokingEmoji from "../../../public/emojis/smoking.svg";
import AlcoholEmoji from "../../../public/emojis/alcohol.svg";
import CaffeineEmoji from "../../../public/emojis/caffeine.svg";
import ProteinEmoji from "../../../public/emojis/protein.svg";
import VegetarianEmoji from "../../../public/emojis/vegetarian.svg";
import NoneEmoji from "../../../public/emojis/none.svg";
import useUserInputStore from "@/store/useUserInputStore";

const LifestyleSelection = () => {
  const { lifestyleSelections, handleArraySelection } = useUserInputStore();

  const options = [
    { label: "Smoking", icon: <SmokingEmoji className="w-[50%] h-auto" /> },
    { label: "Alcohol", icon: <AlcoholEmoji className="w-[50%] h-auto" /> },
    { label: "Caffeine", icon: <CaffeineEmoji className="w-[50%] h-auto" /> },
    {
      label: "High protein",
      icon: <ProteinEmoji className="w-[50%] h-auto" />,
    },
    {
      label: "Vegetarian",
      icon: <VegetarianEmoji className="w-[50%] h-auto" />,
    },
    { label: "None", icon: <NoneEmoji className="w-[50%] h-auto" /> },
  ];

  return (
    <div className="section-contents-container">
      <div className="section-grid-container">
        {options.map(({ label, icon }) => (
          <SelectionBlock
            key={label}
            label={label}
            isSelected={
              Array.isArray(lifestyleSelections) &&
              lifestyleSelections.includes(label)
            }
            onSelect={() => handleArraySelection("lifestyleSelections", label)}
          >
            {icon}
          </SelectionBlock>
        ))}
      </div>
    </div>
  );
};

export default LifestyleSelection;
