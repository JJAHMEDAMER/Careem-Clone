/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
      colors: {
        blue: "#3837e4",
        darkBlue: "#001942",
        lightGreen: "#d2ffd5",
        green: "#00493e",
        purple: "#7f5ffa",
        paleGreen: "#d6ffea",
      },
    },
  },
  plugins: [],
};
