import useUserInputStore from "@/store/useUserInputStore";

export const checkSectionData = (data) => {
  const {
    age,
    gender,
    lifestyleSelections,
    scentSelections,
    occasionSelections,
  } = useUserInputStore.getState();

  const scrollToSection = (section) => {
    document.getElementById(`section${section}`).scrollIntoView({
      behavior: "smooth",
    });
  };

  if (age < 1 || age > 100) {
    scrollToSection(1);
    return false;
  } else if (gender === "") {
    scrollToSection(2);
    return false;
  } else if (lifestyleSelections.length === 0) {
    scrollToSection(3);
    return false;
  } else if (scentSelections.length === 0) {
    scrollToSection(4);
    return false;
  } else if (occasionSelections.length === 0) {
    scrollToSection(5);
    return false;
  } else {
    return true;
  }
};
