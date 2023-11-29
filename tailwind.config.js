/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./images/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        inner: "inset 0 0 4px 0 rgb(0 0 0 / 0.2)",
        button: [
          "0px 0px 3px 3px rgba(0,0,0,0.1)",
          "inset 0px 0px 4px 2px #f0f9ff",
        ],
        base: "0 0 0.5rem rgba(0, 0, 0, 1)",
      },
      // dropShadow: {
      //   button: "0 0 0 2rem #333",
      // },
    },
  },
  plugins: [],
};
