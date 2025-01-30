import FadingDiv from "@/components/visual/components/nav-arrow-down";
import HeadingText from "@/components/visual/components/heading-text";
import NavArrowUp from "@/components/visual/components/nav-arrow-up";
import LifestyleSelection from "@/components/visual/lifestyle-selection";

const Section3 = () => {
  return (
    <section
      id="section3"
      className="section bg-gradient-to-b from-myPurple to-myRed text-white snap-start"
    >
      <NavArrowUp section={3} />
      <HeadingText text={"Which of these are part of your lifestyle?"} />
      <LifestyleSelection />
      <FadingDiv section={3} />
    </section>
  );
};

export default Section3;
