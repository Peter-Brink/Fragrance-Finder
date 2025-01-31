import FadingDiv from "@/components/visual/components/nav-arrow-down";
import HeadingText from "@/components/visual/components/heading-text";
import NavArrowUp from "@/components/visual/components/nav-arrow-up";
import FlavourSelection from "@/components/visual/scent-selection";

const Section4 = () => {
  return (
    <section
      id="section4"
      className="section bg-gradient-to-b from-myRed to-myOrange"
    >
      <NavArrowUp section={4} />
      <HeadingText text={"Which scent profiles are you looking for?"} />
      <FlavourSelection/>
      <FadingDiv section={4} />
    </section>
  );
};

export default Section4;
