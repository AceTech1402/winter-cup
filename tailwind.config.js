/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxl: { max: "1536px" },
      // => @media (max-width: 1279px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      mobile: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "480px" },
      // => @media (max-width: 440px) { ... }
    },
    extend: {
      backgroundImage: {
        "header-event": 'url("./pic/eManager/background/headerEventBg.jpg")',
        impressum: 'url("./pic/eManager/background/ImpressumBg.jpg")',
      },

      colors: {
        p: {
          orange: "#f77f00",
          dark: {
            1: "#1D201F",
            text: "#A6A2A2",
          },
          yellow: {
            1: "#FFEA00",
          },
          purple: {
            1: "#5E239D",
            2: "#5E3FBE",
          },
        },
        "dark-purple": "#202249",
        white: "#ffffff",
        "primary-gold": "#FFCB00",
        "text-dark": "#1D201F",
        "light-blue": "#2FA5CE",
        orange: "#FFA500",
        red: "#CC1616",
        "dark-gray": "#C7C7C7",
        yellow: "#FFEA00",
      },
    },
    plugins: [],
  },
};
