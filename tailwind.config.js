/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF8C00", // Example Orange/Gold for highlight
        "dark-bg": "#101010", // Dark background
        "dark-card": "#1C1C1C", // Slightly lighter card bg
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Example clean sans-serif
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(255, 140, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
