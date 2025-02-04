import FadingDiv from "@/components/reusable/nav-arrow-down";
import HeadingText from "@/components/reusable/heading-text";
import NavArrowUp from "@/components/reusable/nav-arrow-up";
import LifestyleSelection from "@/components/section contents/lifestyle-selection";


const Section5 = () => {
  return (
    <section
      id="section5"
      className="section bg-gradient-to-b from-myOrange to-myYellow"
    >
      <NavArrowUp section={5} />
      <div>
        <HeadingText text={"Which of these are part of your lifestyle?"} />
        <LifestyleSelection />
      </div>
      <FadingDiv section={5} />
    </section>
  );
};

export default Section5;
