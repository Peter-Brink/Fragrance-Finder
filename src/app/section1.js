import AgeInput from "@/components/inputs/age-input";
import FadingDiv from "@/components/visual/components/nav-arrow-down";
import HeadingText from "@/components/visual/components/heading-text";
import NavArrowUp from "@/components/visual/components/nav-arrow-up";

const Section1 = () => {
  return (
    <section
      id="section1"
      className="section bg-gradient-to-b from-myBlue to-mylightBlue"
    >
      <NavArrowUp section={1} />
      <HeadingText text={"How old are you?"} />
      <div className="w-[80vw] flex flex-grow mb-20 justify-center">
        <AgeInput />
      </div>
      <FadingDiv section={1} />
    </section>
  );
};

export default Section1;
