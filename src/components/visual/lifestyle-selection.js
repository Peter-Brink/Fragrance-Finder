import { useState } from "react";
import SelectionBlock from "./components/selection-block";
import SmokingEmoji from "../../../public/emojis/smoking.svg";
import AlcoholEmoji from "../../../public/emojis/alcohol.svg";
import CaffeineEmoji from "../../../public/emojis/caffeine.svg";
import ProteinEmoji from "../../../public/emojis/protein.svg";
import VegetarianEmoji from "../../../public/emojis/vegetarian.svg";
import NoneEmoji from "../../../public/emojis/none.svg";

const LifestyleSelection = ({ sectionId }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

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

  const handleSelect = (label) => {
    if (label === "None") {
      setSelectedOptions(["None"]);
      return;
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== "None"));
      setSelectedOptions((prev) =>
        prev.includes(label)
          ? prev.filter((item) => item !== label)
          : [...prev, label]
      );
    }
  };

  return (
    <div className="flex flex-col items-center w-[100vw] mt-6">
      <div className="grid grid-cols-2  sm:grid-cols-3 gap-2 sm:gap-5 md:gap-10 lg:gap-x-20">
        {options.map(({ label, icon }) => (
          <SelectionBlock
            key={label}
            label={label}
            isSelected={selectedOptions.includes(label)}
            onSelect={() => handleSelect(label)}
          >
            {icon}
          </SelectionBlock>
        ))}
      </div>
    </div>
  );
};

export default LifestyleSelection;
