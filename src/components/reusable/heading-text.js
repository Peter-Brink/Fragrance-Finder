const HeadingText = ({ text }) => {
  return (
    <div className={`w-[100vw] text-center mb-6 xs:mb-10 md:mb-14`}>
      <h1 className="text-2xl xs:text-3xl md:text-5xl font-light ml-10 mr-10">
        {text}
      </h1>
    </div>
  );
};

export default HeadingText;
