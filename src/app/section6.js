import FadingDiv from "@/components/visual/components/nav-arrow-down";
import HeadingText from "@/components/visual/components/heading-text";
import NavArrowUp from "@/components/visual/components/nav-arrow-up";

const Section6 = () => {
  return (
    <section
      id="section6"
      className="section bg-gradient-to-b from-myYellow to-myPink text-white snap-start"
    >
      <NavArrowUp section={6} />
      <FadingDiv section={6} />
      <HeadingText text={"What is your price range?"} />
    </section>
  );
};

export default Section6;
