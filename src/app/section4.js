import FadingDiv from "@/components/visual/components/nav-arrow-down";
import HeadingText from "@/components/visual/components/heading-text";
import NavArrowUp from "@/components/visual/components/nav-arrow-up";

const Section4 = () => {
  return (
    <section
      id="section4"
      className="section bg-gradient-to-b from-myRed to-myOrange text-white snap-start"
    >
      <NavArrowUp section={4} />
      <FadingDiv section={4} />
      <HeadingText text={"Which flavour profiles are you looking for?"} />
    </section>
  );
};

export default Section4;
