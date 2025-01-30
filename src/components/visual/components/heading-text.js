const HeadingText = ({text}) => {
  return (
    <div className="flex flex-col w-[100vw] text-center h-16 mt-[14vh] mb-[2vh]">
      <h1 className="text-2xl xs:text-3xl md:text-5xl font-light ml-10 mr-10">
        {text}
      </h1>
    </div>
  );
};

export default HeadingText;