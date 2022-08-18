module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_900: "#27214d",
        blue_900: "#1b55ac",
        black_900: "#000000",
        blue_900_28: "#1b55ac28",
        indigo_A700: "#403ffc",
        lime_900: "#a96224",
        bluegray_100: "#d9d9d9",
        lime_901: "#6e3809",
        gray_400_b2: "#c2bcbcb2",
        white_A700: "#ffffff",
        gray_100: "#f7f5f5",
      },
      borderRadius: { radius10: "10px", radius20: "20px", radius50: "50%" },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
      letterSpacing: { ls1: "1px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
