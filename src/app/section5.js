import FadingDiv from "@/components/visual/components/nav-arrow-down";
import HeadingText from "@/components/visual/components/heading-text";
import NavArrowUp from "@/components/visual/components/nav-arrow-up";

const Section5 = () => {
  return (
    <section
      id="section5"
      className="section bg-gradient-to-b from-myOrange to-myYellow text-white snap-start"
    >
      <NavArrowUp section={5} />
      <FadingDiv section={5} />
      <HeadingText text={"What occasion is your fragrance for?"} />
    </section>
  );
};

export default Section5;
