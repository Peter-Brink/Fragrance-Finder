import { create } from "zustand";

const useUserInputStore = create((set) => ({
  age: 25,
  gender: "",
  occasionSelections: [],
  scentSelections: [],
  lifestyleSelections: [],
  priceRange: [0, 500],
  extraDetails: "",

  setSectionData: (section, value) =>
    set((state) => ({ ...state, [section]: value })),

  resetForm: () =>
    set({
      age: 25,
      gender: "",
      occasionSelections: [],
      scentSelections: [],
      lifeestyleSelections: [],
      priceRange: [100, 300],
      extraDetails: "",
    }),

  handleArraySelection: (section, option) =>
    set((state) => {
      const currentSelections = state[section];

      if (option === "None") {
        return { [section]: ["None"] };
      }

      if (option === "Choose for me") {
        return { [section]: ["Choose for me"] };
      }

      var updatedSelection = [];

      if (Array.isArray(currentSelections)) {
        if (currentSelections.includes(option)) {
          updatedSelection = currentSelections.filter(
            (item) => item !== option
          );
        } else {
          const noNoneSelections = currentSelections.filter(
            (item) => item !== "None" && item !== "Choose for me"
          );
          updatedSelection = [...noNoneSelections, option];
        }
      } else {
        updatedSelection = [option];
      }

      return { [section]: updatedSelection };
    }),
}));

export default useUserInputStore;
