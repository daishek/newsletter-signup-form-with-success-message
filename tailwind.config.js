/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(4, 100%, 67%)",
        dx_DarkSlateGrey: "hsl(234, 29%, 20%)",
        dx_CharcoalGrey: "hsl(235, 18%, 26%)",
        dx_Grey: "hsl(231, 7%, 60%)",
        dx_White: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        body: "16px",
      },
      fontFamily: {
        roboto: ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
};
