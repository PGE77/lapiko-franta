/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',               // Hlavní HTML soubory v kořenové složce
    './**/*.html',            // HTML soubory ve všech podsložkách
    './js/**/*.js',           // JavaScript soubory
    './components/**/*.{js,ts,jsx,tsx}' // Další šablony (např. React)
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      blue: "#007bff",
      black:"#000000",
      darkGrey: "#2c281c",
      grey: "#1a1a1a",
      lightGrey:"#ADB3BF",
      middleGrey:"#919191",
      footerGrey:"#ABAAAB",

    },
    fontSize: {
      xxs: "10px",
      xs: "12px",
      sm: "13px",
      md: "14px",
      base: "15px",
      "xl0":"16px",
      "0xl": "17px",
      "1xl": "18px",
      "xl": "20px",
      "2xl": "25px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "43px",
      "5xl5":"50px",
      "6xl": "59px",
    },
    extend: {
      screens: {
        '3xl': '1600px',
      },
      height: {

      },
      backgroundImage: {
       "gradientPurple": "linear-gradient(to bottom right, #232041, #ed145b)",
       "gradientBlue": "linear-gradient(240deg, rgba(49,101,237,1) 0%, rgba(7,130,249,1) 100%)",
      },

      boxShadow: {},
      fontFamily: {
        sans: ["Noto Sans"],
        serif: ["Cormorant SC"],
      },
    },
  },
  plugins: [],
};
