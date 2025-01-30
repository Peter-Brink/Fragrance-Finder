const SelectionBlock = ({ label, children, isSelected, onSelect }) => {
  return (
    <div
      className={`selection-block bg-white flex flex-col cursor-pointer ${
        isSelected ? "outline outline-4 outline-myNavy" : "outline-none"
      } ${
          label == "Choose for me" ? "items-center" : "items-start"}`}
      onClick={onSelect}
    >
      <p
        className={`text-black xs:text-1xl sm:text-2xl md:text-3xl relative font-light top-4 sm:top-6 ${
          label == "Choose for me" ? "" : "left-7 md:left-8"
        }`}
      >
        {label}
      </p>
      <div className="w-[100%] flex justify-center items-center mt-6 xs:mt-8 md:mt-12">
        {children}
      </div>
    </div>
  );
};

export default SelectionBlock;
