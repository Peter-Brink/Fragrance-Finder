import AgeInput from "@/components/section contents/age-input";
import FadingDiv from "@/components/reusable/nav-arrow-down";
import HeadingText from "@/components/reusable/heading-text";
import NavArrowUp from "@/components/reusable/nav-arrow-up";

const Section1 = () => {
  return (
    <section
      id="section1"
      className="section bg-gradient-to-b from-myBlue to-mylightBlue"
    >
      <NavArrowUp section={1} />
      <div>
        <HeadingText text={"How old are you?"} />
        <AgeInput />
      </div>
      <FadingDiv section={1} />
    </section>
  );
};

export default Section1;
