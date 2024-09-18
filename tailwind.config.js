/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "moderate-violet": "#8C70C9",
        "very-dark-grayish-blue": "#37475E",
        "very-dark-blackish-blue": "#1F2E45",
        white: "#FFFFFF",
        "light-gray": "#CFCFCF",
        "light-grayish-blue": "#F5F7FA",
      },
    },
  },
  plugins: [],
};
