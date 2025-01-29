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
        mylightBlue: '#42CAFF',
        myPurple: '#9400EA',
        myPink1: '#D903D9',
        myRed: '#C7084B',
        myOrange: '#F78400',
        myYellow: '#FFD400',
        myPink2: '#FD00A4',
        myTextBlue: "#0095DA",
        myTextPink: "#EA00E2",
      },
    },
  },
  plugins: [],
};
