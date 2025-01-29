import AgeInput from "@/components/inputs/age-input";
import FadingDiv from "@/components/visual/fading-div";
import HeadingText from "@/components/visual/heading-text";

const Section1 = () => {
  return (
    <section id="section1" className="section bg-gradient-to-b from-myBlue to-mylightBlue text-white snap-start">
    <HeadingText text={"How old are you?"} />
      <div className="w-[80vw] h-[60vh">
        <AgeInput />
      </div>
      <FadingDiv section={1} />
    </section>
  );
};

export default Section1;
