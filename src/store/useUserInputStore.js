import { create } from "zustand";

// Define Zustand store
const useUserInputStore = create((set) => ({
  // Initial state for each section
  age: 25,
  gender: "",
  lifestyleSelections: [],
  scentSelections: "",
  occasionSelections: "",
  priceRange: [400, 700],
  extraDetails: "",

  // Function to update a section’s state
  setSectionData: (section, value) =>
    set((state) => ({ ...state, [section]: value })),

  // Function to reset all inputs
  resetForm: () =>
    set({
      age: 25,
      gender: "",
      lifestyleSelections: [],
      scentSelections: "",
      occasionSelections: "",
      priceRange: [400, 700],
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
