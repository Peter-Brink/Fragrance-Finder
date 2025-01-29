import FadingDiv from "@/components/visual/fading-div";

const LandingPage = () => {
  return (
    <section className="section justify-center snap-start bg-gradient-to-b from-myNavy via-myNavy to-myBlue">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl font-sans font-light text-white mb-5">
          Your fragrance helps you
        </h1>
        <h1 className="text-6xl sm:text-8xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-r from-myTextBlue to-myTextPink">
          Stand Out
        </h1>
      </div>
      <FadingDiv section={0} text={"Let us help you choose it."} />
    </section>
  );
};

export default LandingPage;
