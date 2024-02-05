/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#191919",
          "200": "#061025",
          "300": "#0e041f",
          "400": "#140505",
          "500": "rgba(0, 0, 0, 0.9)",
        },
        white: "#fff",
        crimson: "#e41a4d",
        whitesmoke: {
          "100": "rgba(245, 245, 245, 0.73)",
          "200": "rgba(245, 245, 245, 0.8)",
          "300": "rgba(245, 245, 245, 0.51)",
          "400": "rgba(245, 245, 245, 0.14)",
        },
        black: "#000",
        darkslategray: "#052a0b",
        yellow: "#fff500",
        silver: "#c7c7c7",
        darkslateblue: "#373368",
      },
      spacing: {},
      fontFamily: {
        "font-awesome-5-brands": "'Font Awesome 5 Brands'",
        ubuntu: "Ubuntu",
        poppins: "Poppins",
        inter: "Inter",
        "mukta-malar": "'Mukta Malar'",
        "merge-one": "'Merge One'",
        molengo: "Molengo",
        "sue-ellen-francisco": "'Sue Ellen Francisco'",
        "love-ya-like-a-sister": "'Love Ya Like A Sister'",
        enriqueta: "Enriqueta",
        prompt: "Prompt",
        rakkas: "Rakkas",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        "pontano-sans": "'Pontano Sans'",
        oxygen: "Oxygen",
        "poller-one": "'Poller One'",
      },
      borderRadius: {
        "77xl": "96px",
        "8xs": "5px",
        "3xs": "10px",
        "26xl": "45px",
        "52xl": "71px",
      },
    },
    fontSize: {
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "lgi-2": "19.2px",
      base: "16px",
      "lgi-1": "19.1px",
      "4xl-8": "23.8px",
      "5xl": "24px",
      xl: "20px",
      "77xl": "96px",
      "10xl": "29px",
      "29xl": "48px",
      "17xl": "36px",
      "3xl": "22px",
      "21xl": "40px",
      "109xl": "128px",
      "32xl": "51px",
      "19xl": "38px",
      smi: "13px",
      "9xl-8": "28.8px",
      "4xl": "23px",
      inherit: "inherit",
    },
    screens: {
      mq1700: {
        raw: "screen and (max-width: 1700px)",
      },
      mq1600: {
        raw: "screen and (max-width: 1600px)",
      },
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1500: {
        raw: "screen and (max-width: 1500px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
