/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myNavy: "#00031D",
        myBlue: "#0015CD",
        mylightBlue: "#42CAFF",
        myPurple: "#9400EA",
        myRed: "#D90355",
        myOrange: "#F78400",
        myYellow: "#FFD400",
        myPink: "#FD00A4",
        myBlue2: "#4800FD",
        myGrey: "#FBFBFB",
        myTextBlue: "#0095DA",
        myTextPink: "#EA00E2",
        myResultsTextBlue: "#008BD5",
        myResultsLineMiddle: "#3B2FDE",
        myResultsTextPink: "#B700EA",
        myButtonBlue: "#002183",
      },
      screens: {
        xs: "480px", // Custom breakpoint for smaller screens
      },
      fontFamily: {
        "inter-tight": ["Inter Tight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
