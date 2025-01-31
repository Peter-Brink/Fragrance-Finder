import HeadingText from "@/components/visual/components/heading-text";
import NavArrowUp from "@/components/visual/components/nav-arrow-up";
import ExtraInfoSection from "@/components/visual/extra-info-section";

const Section7 = ({ navigateToResults }) => {
  return (
    <section
      id="section7"
      className="section bg-gradient-to-b from-myPink to-myBlue2"
    >
    <NavArrowUp section={7} />
    <HeadingText className="mt-[30vh]" text={"Is there anything else you think we should know?"} />
    <ExtraInfoSection navigateToResults={navigateToResults}/>
    </section>
  );
};

export default Section7;
