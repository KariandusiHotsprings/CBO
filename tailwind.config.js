/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandblue: "#005F73",
        brandgreen: "#0B6B41",
        brandlight: "#E6F4F1"
      },
    },
  },
  plugins: [],
};
