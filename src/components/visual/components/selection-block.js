const SelectionBlock = (
  { label, children, isSelected, onSelect }
) => {
  return (
    <div
      className={`selection-block bg-white flex flex-col items-start ${
        isSelected ? "outline outline-4 outline-myNavy" : "outline-none"
      }`}
      onClick={onSelect}
    >
      <p className="text-black xs:text-1xl sm:text-2xl md:text-3xl relative font-light top-4 sm:top-6 left-7 md:left-8 lg:left-12">{label}</p>
      <div className="w-[100%] flex justify-center items-center mt-6 xs:mt-8 md:mt-12">
      {children}
      </div>
    </div>
  );
};

export default SelectionBlock;
