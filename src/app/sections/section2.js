import FadingDiv from "@/components/reusable/nav-arrow-down";
import HeadingText from "@/components/reusable/heading-text";
import NavArrowUp from "@/components/reusable/nav-arrow-up";
import GenderSelection from "@/components/section contents/gender-selection";

const Section2 = () => {
  return (
    <section
      id="section2"
      className="section bg-gradient-to-b from-mylightBlue to-myPurple"
    >
      <NavArrowUp section={2} />
      <HeadingText text={"What is your gender?"} />
      <GenderSelection />
      <FadingDiv section={2} />
    </section>
  );
};

export default Section2;
