import FadingDiv from "@/components/visual/components/nav-arrow-down";
import HeadingText from "@/components/visual/components/heading-text";
import NavArrowUp from "@/components/visual/components/nav-arrow-up";
import GenderSelection from "@/components/visual/gender-selection";

const Section2 = () => {
  return (
    <section
      id="section2"
      className="section bg-gradient-to-b from-mylightBlue to-myPurple text-white snap-start"
    >
      <NavArrowUp section={2} />
      <HeadingText text={"What is your gender?"} />
      <GenderSelection />
      <FadingDiv section={2} />
    </section>
  );
};

export default Section2;
