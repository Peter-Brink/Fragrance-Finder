import FadingDiv from "@/components/visual/components/nav-arrow-down";
import HeadingText from "@/components/visual/components/heading-text";
import ManEmoji from "../../public/emojis/man-raising-hand.svg";
import WomanEmoji from "../../public/emojis/woman.svg";
import NavArrowUp from "@/components/visual/components/nav-arrow-up";

const Section2 = () => {
  return (
    <section
      id="section2"
      className="section bg-gradient-to-b from-mylightBlue to-myPurple text-white snap-start"
    >
      <NavArrowUp section={2} />
      <HeadingText text={"What is your gender?"} />
      <div className="flex items-center justify-center gap-5 xs:gap-10 lg:gap-20 w-[100%] h-[60vh]">
        <div className="gender-block">
          <ManEmoji className="w-[50%] h-auto" />
        </div>
        <div className="gender-block">
          <WomanEmoji className="w-[50%] h-auto ml-3 xs:ml-5 md:ml-10" />
        </div>
      </div>
      <FadingDiv section={2} />
    </section>
  );
};

export default Section2;
