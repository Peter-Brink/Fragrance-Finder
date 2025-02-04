'use client';
import useUserInputStore from "@/store/useUserInputStore";

export const makeApiCall = async () => {
  const {
    age,
    gender,
    lifestyleSelections,
    scentSelections,
    occasionSelections,
    priceRange,
    extraDetails,
  } = useUserInputStore.getState();

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

  try {
    const res = await fetch(process.env.NODE_ENV === 'production' ? `https://${process.env.VERCEL_URL}` : process.env.NEXT_PUBLIC_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: llmInput,
      }),
    });

    const data = await res.json();

    if (res.status !== 200) {
      throw new Error(
        data.message + (data.details ? "\nDetails: " + data.details : "")
      );
    }
    localStorage.setItem("resultsData", data);
    return res.status;
  } catch (error) {
    console.error("Error during API call.", error);
    return error;
  }
};
