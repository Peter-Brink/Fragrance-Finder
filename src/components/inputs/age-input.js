import useUserInputStore from "@/store/useUserInputStore";

const AgeInput = () => {
  const { age, setSectionData } = useUserInputStore();

  return (
    <input
      type="text"
      pattern="\d+"
      inputMode="numeric"
      id="age"
      min={1}
      max={99}
      maxLength={2}
      value={age}
      onChange={(e) => setSectionData("age", e.target.value)}
      onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
      className="w-[100%] text-[200px] sm:text-[350px] lg:text-[400px] mb-20 bg-transparent text-center focus:outline-none focus:ring-0"
    />
  );
};

export default AgeInput;
