/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html", "*.html"],
  safelist: ["overflow-hidden", "opacity-70"],
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
      serif: ["Bitter"],
    },
    extend: {
      colors: {
        nyuViolet: "#57068c",
        nyuUltraViolet: "#8900e1",
        nyuBlack: "#000000",
        nyuDeepViolet: "#330662",
        nyuMediumViolet1: "#702b9d",
        nyuMediumViolet2: "#7b5aa6",
        nyuLightViolet1: "#ab82c5",
        nyuLightViolet2: "#eee6f3",
      },
      lineHeight: {
        "nav-bar": "7.66667rem",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "2160px",
    },
  },
};
