import HeadingText from "@/components/reusable/heading-text";
import NavArrowUp from "@/components/reusable/nav-arrow-up";
import ExtraInfoSection from "@/components/section contents/extra-info-section";

const Section7 = ({ navigateToResults }) => {
  return (
    <section
      id="section7"
      className="section bg-gradient-to-b from-myPink to-myBlue2"
    >
      <NavArrowUp section={7} />
      <HeadingText
        className="mt-[30vh]"
        text={"Is there anything else you think we should know?"}
      />
      <ExtraInfoSection navigateToResults={navigateToResults} />
    </section>
  );
};

export default Section7;
