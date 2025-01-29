const HeadingText = ({text}) => {
  return (
    <div className="flex w-[70vw] h-16 mt-[15vh] mb-[2vh]">
      <h1 className="text-2xl xs:text-3xl md:text-5xl font-light">
        {text}
      </h1>
    </div>
  );
};

export default HeadingText;