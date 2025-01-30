import HeadingText from "@/components/visual/components/heading-text";
import NavArrowUp from "@/components/visual/components/nav-arrow-up";

const Section7 = () => {
  return (
    <section
      id="section7"
      className="section bg-gradient-to-b from-myPink to-myBlue2 text-white snap-start"
    >
      <NavArrowUp section={7} />
      <HeadingText text={"Is there anything else you think we should know?"} />
    </section>
  );
};

export default Section7;
