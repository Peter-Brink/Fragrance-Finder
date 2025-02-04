import FadingDiv from "@/components/reusable/nav-arrow-down";
import HeadingText from "@/components/reusable/heading-text";
import NavArrowUp from "@/components/reusable/nav-arrow-up";
import FlavourSelection from "@/components/section contents/scent-selection";

const Section4 = () => {
  return (
    <section
      id="section4"
      className="section bg-gradient-to-b from-myRed to-myOrange"
    >
      <NavArrowUp section={4} />
      <div>
        <HeadingText text={"Which scent profiles are you looking for?"} />
        <FlavourSelection />
      </div>
      <FadingDiv section={4} />
    </section>
  );
};

export default Section4;
