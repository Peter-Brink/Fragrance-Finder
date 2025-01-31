import ManEmoji from "../../../public/emojis/man-raising-hand.svg";
import WomanEmoji from "../../../public/emojis/woman.svg";
import useUserInputStore from "@/store/useUserInputStore";

const GenderSelection = () => {
  const { section2, setSectionData } = useUserInputStore();

  const handleSelection = (gender) => {
    setSectionData("section2", gender);
  };

  return (
    <div className="flex items-center justify-center gap-5 xs:gap-10 lg:gap-20 w-[100%] h-[60vh]">
      <div
        className={`gender-block ${
          section2 == "male"
            ? "outline outline-4 outline-myNavy"
            : "outline-none"
        }`}
        onClick={() => handleSelection("male")}
      >
        <ManEmoji className="w-[50%] h-auto" />
      </div>
      <div
        className={`gender-block ${
          section2 == "female"
            ? "outline outline-4 outline-myNavy"
            : "outline-none"
        }`}
        onClick={() => handleSelection("female")}
      >
        <WomanEmoji className="w-[50%] h-auto ml-3 xs:ml-5 md:ml-10" />
      </div>
    </div>
  );
};

export default GenderSelection;
