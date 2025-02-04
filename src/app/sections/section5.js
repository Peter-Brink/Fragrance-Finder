import FadingDiv from "@/components/reusable/nav-arrow-down";
import HeadingText from "@/components/reusable/heading-text";
import NavArrowUp from "@/components/reusable/nav-arrow-up";
import OccasionSelection from "@/components/section contents/occasion-selection";

const Section5 = () => {
  return (
    <section
      id="section5"
      className="section bg-gradient-to-b from-myOrange to-myYellow"
    >
      <NavArrowUp section={5} />
      <div>
        <HeadingText text={"What occasion is your fragrance for?"} />
        <OccasionSelection />
      </div>
      <FadingDiv section={5} />
    </section>
  );
};

export default Section5;
