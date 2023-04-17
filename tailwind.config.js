/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#D4E9E2",
        light: "#F9F9F9",
        primary: "#BF0000",
      },
      container: {
        screens: {
          xl: "1440px",
        },
      },
      maxWidth: {
        desktop: "1440px",
      },
      fontFamily: {
        heading: ["var(--font-fraunces)"],
        body: ["var(--font-inter)"],
      },
      boxShadow: {
        "custom-1": " 0px 24px 12px -12px rgba(0, 0, 0, 0.06);",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
