import FadingDiv from "@/components/visual/components/nav-arrow-down";
import HeadingText from "@/components/visual/components/heading-text";
import NavArrowUp from "@/components/visual/components/nav-arrow-up";
import PriceSelection from "@/components/visual/price-selection";

const Section6 = () => {
  return (
    <section
      id="section6"
      className="section bg-gradient-to-b from-myYellow to-myPink"
    >
      <NavArrowUp section={6} />
      <div>
        <HeadingText text={"What is your price range?"} />
        <PriceSelection />
      </div>
      <FadingDiv section={6} />
    </section>
  );
};

export default Section6;
