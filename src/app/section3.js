import FadingDiv from "@/components/visual/fading-div";
import HeadingText from "@/components/visual/heading-text";

const Section3 = () => {
  return (
    <section
      id="section3"
      className="section bg-gradient-to-b from-myPurple to-myRed text-white snap-start"
    >
      <FadingDiv section={3} />
    </section>
  );
};

export default Section3;
