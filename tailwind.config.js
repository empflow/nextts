/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#000",
        secondary: {
          100: "#800",
          200: "#400",
        },
      },
      maxWidth: {
        "2xs": "16rem",
      },
    },
  },
  plugins: [],
};
