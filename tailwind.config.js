/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#3A86FF",
        mainHover: "#4f92fe",
        mainClear: "rgba(58, 134, 255, 0.1)",
        LoginInputBg: "rgba(58, 134, 255, 0.05)",
        navBg: "#FFFFFF",
        sectionBg: "#FFFFFF",
        bodyBg: "#F9F9F9",
        whiteMain: "#FFFFFF",
        navIcon: "#4B4B4B",
        lineBg: "#EDEDED",

        whiteLoad: "#ECECEC",
        whiteHover: "#f9f9f9",

        buttonBgFirst: "#3A86FF",
        buttonBgLast: "#6DA5FF",

        photoLabel: "rgba(255, 255, 255, 0.9)",
        photoLabelDesc: "rgba(255, 255, 255, 0.8)",

        sliderFadeStart: "rgba(0, 0, 0, 0.6)",
        sliderFadeEnd: "rgba(0, 0, 0, 0)",
        sliderHead: "rgba(255, 255, 255, 0.9)",
        sliderDesc: "rgba(255, 255, 255, 0.8)",

        WhiteFade: "rgba(255, 255, 255, 0.9)",

        cardInfoBg: "rgba(0, 0, 0, 0.6)",

        textBlack: "#000000",
        textHead: "rgba(0, 0, 0, 0.7)",
        textDesc: "rgba(0, 0, 0, 0.6)",
        textInfo: "rgba(0, 0, 0, 0.5)",
        textPlaceholder: "rgba(0, 0, 0, 0.4)",

        userName: "rgba(0, 0, 0, 0.8)",
        userLastName: "rgba(0, 0, 0, 0.6)",

        textHeadCard: "rgba(0, 0, 0, 0.8)",
        textDescCard: "rgba(0, 0, 0, 0.5)",
        cardBg: "#FFFFFF",
        cardInfo: "#FFFFFF",
        cardInfoBg: "rgba(0, 0, 0, 0.6)",
        cardButtonBg: "#F5F5F5",
        cardButtonIcon: "rgba(0, 0, 0, 0.5)",

        footerBg: "#FFFFFF",

        maclerMain: "#3DBE00",
        maclerMain: "rgba(60, 190, 0, 0.1)",

        orangeI: "#FF9900",
        orangeClear: "rgba(255, 153, 0, 0.1)",
        orangeHover: "rgba(255, 153, 0, 0.15)",
        redI: "#FF0000",
        redClear: "rgba(255, 0, 0, 0.1)",
        redHover: "rgba(255, 0, 0, 0.15)",
        redCloseI: "#E20036",
        pinkI: "#FF03A9",
        pinkClear: "rgba(255, 3, 171, 0.1)",
        pinkHover: "rgba(255, 3, 171, 0.15)",
        purpleI: "#BD00FF",
        purpleClear: "rgba(187, 0, 255, 0.1)",
        purpleHover: "rgba(187, 0, 255, 0.15)",
        greenI: "#00CD08",
        greenClear: "rgba(0, 205, 7, 0.1)",
        greenHover: "rgba(0, 205, 7, 0.15)",
        yellowI: "#FFC700",
        yellowClear: "rgba(255, 200, 0, 0.1)",
        yellowHover: "rgba(255, 200, 0, 0.15)",
        blueI: "#0075FF",
        blueClear: "rgba(0, 119, 255, 0.1)",
        blueHover: "rgba(0, 119, 255, 0.15)",
        blueLightI: "#4E7FFF",
        cyanI: "#00C2FF",
        cyanClear: "rgba(0, 195, 255, 0.1)",
        cyanHover: "rgba(0, 195, 255, 0.15)",

        success: "#00E75C",
        info: "#FFB800",
        warning: "#FF003D",

        buttonStroke: "#F0F0F0",
      },
      boxShadow: {
        sectionShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        cardShadow: "0px 8px 30px rgba(0, 0, 0, 0.05)",
        navbarShadow: "0px 2px 40px rgba(0, 0, 0, 0.1)",
        slideNavShadow: "0px 4px 15px rgba(58, 133, 255, 0.15)",
      },
      borderRadius: {
        circle: "50%",
        normal: "10px",
      },
      fontFamily: {
        mainSemiBold: "mainSemiBold",
        mainBold: "mainBold",
        mainRegular: "mainRegular",
      },
      fontSize: {
        Asmallest: "11px",
        Asmaller: "12px",
        Asmall: "14px",
        Anormal: "18px",
        Abig: "22px",
      },
    },
  },
  plugins: [],
};
