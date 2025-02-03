// utils/api.js

import useUserInputStore from "@/store/useUserInputStore";

// Utility function to make the API call
export const makeApiCall = async () => {
  const {
    age,
    gender,
    lifestyleSelections,
    scentSelections,
    occasionSelections,
    priceRange,
    extraDetails,
  } = useUserInputStore.getState(); // Access Zustand state directly here

  console.log("age: ", age);
  console.log("gender: ", gender);
  console.log("lifestyleSelections: ", lifestyleSelections);
  console.log("scentSelections: ", scentSelections);
  console.log("occasionSelections: ", occasionSelections);
  console.log("priceRange: ", priceRange);
  console.log("extraDetails: ", extraDetails);

  const llmInput = `The user is a ${age} year old ${gender}.${
    lifestyleSelections[0] === "None"
      ? ""
      : ` Consider the following factors as part of their lifestyle: ${lifestyleSelections.join(
          ", "
        )}.`
  } ${
    scentSelections[0] === "Choose for me"
      ? "They are open to any type of scent"
      : `They are looking for a fragrance that is ${scentSelections.join(", ")}`
  }. They need something that is suitable for ${occasionSelections.join(
    ", "
  )}. They are willing to spend between ${priceRange[0]} and ${
    priceRange[1]
  } dollars.${
    extraDetails === ""
      ? ""
      : " They also had the following additional notes: " + extraDetails
  }`;

  console.log(llmInput);

  try {
    const res = await fetch("/api/llm-connector", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: llmInput,
      }),
    });
    if (res.status !== 200) {
      throw new Error("API call failed: " + res.statusText);
    }
    const data = await res.json();
    localStorage.setItem("resultsData", data);
    return res.status;
  } catch (error) {
    console.error("Error during API call:", error);
    return error;
  }
};
