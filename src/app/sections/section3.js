import FadingDiv from "@/components/reusable/nav-arrow-down";
import HeadingText from "@/components/reusable/heading-text";
import NavArrowUp from "@/components/reusable/nav-arrow-up";
import OccasionSelection from "@/components/section contents/occasion-selection";

const Section3 = () => {
  return (
    <section
      id="section3"
      className="section bg-gradient-to-b from-myPurple to-myRed"
    >
      <NavArrowUp section={3} />
      <div>
        <HeadingText text={"What occasion is your fragrance for?"} />
        <OccasionSelection />
      </div>
      <FadingDiv section={3} />
    </section>
  );
};

export default Section3;
