/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gris1: "#C4C3C6",
        gris2: "#262626",
        gris3: "#252426",
        gris4: "#2C2C2C",
        negro1: "#191919",
        v1: "#C2A8FF",
        v2: "#FF99EB",
        v3: "#FFBB80",
        v4: "#FFE27A",
        v5: "#69F28D",
        v6: "#8ECFFB"
      }
    },
  },
  plugins: [],
}

