/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainClear2: "rgba(58, 133, 255, 0.7)",
        main: "#3A86FF",
        mainHover: "#4f92fe",
        mainClear: "rgba(58, 134, 255, 0.1)",
        mainClearActive: "rgba(58, 134, 255, 0.15)",
        LoginInputBg: "rgba(58, 134, 255, 0.05)",
        navBg: "#FFFFFF",
        sectionBg: "#FFFFFF",
        bodyBg: "#F9F9F9",
        whiteMain: "#FFFFFF",
        navIcon: "#4B4B4B",
        lineBg: "#f4f4f4",
        blackMain: "rgba(0, 0, 0, 0.8)",

        LoginInput: "rgba(236, 236, 236, 0.5)",
        LoginInputActive: "rgba(236, 236, 236, 0.9)",

        whiteLow: "rgba(239, 239, 239, 0.6)",
        whiteCont: "rgba(198, 198, 198, 1)",

        whiteLoad: "#ECECEC",
        whiteHover: "#f9f9f9",

        whiteBgLow: "#f7f7f7",

        buttonBgFirst: "#3A86FF",
        buttonBgLast: "#6DA5FF",

        photoLabel: "rgba(255, 255, 255, 0.9)",
        photoLabelDesc: "rgba(255, 255, 255, 0.8)",

        inputBorder: "#DFDFDF",

        sliderFadeStart: "rgba(0, 0, 0, 0.6)",
        sliderFadeEnd: "rgba(0, 0, 0, 0)",
        sliderHead: "rgba(255, 255, 255, 0.9)",
        sliderDesc: "rgba(255, 255, 255, 0.8)",

        blackFade: "rgba(0, 0, 0, 0.3)",

        sectionFadeStart: "rgba(0, 0, 0, 0.75)",
        sectionFadeEnd: "rgba(0, 0, 0, 0.1)",

        WhiteFade: "rgba(255, 255, 255, 0.9)",

        cardInfoBg: "rgba(0, 0, 0, 0.6)",

        textBlack: "#000000",
        textHeadBlack: "rgba(0, 0, 0, 0.9)",
        textHead: "rgba(0, 0, 0, 0.7)",
        textDesc: "rgba(0, 0, 0, 0.6)",
        textInfo: "rgba(0, 0, 0, 0.5)",
        textPlaceholder: "rgba(0, 0, 0, 0.4)",

        borderCol1: "#F2F2F2",

        profileInfoBlock: "#F2F2F2",
        profileInfoBlockHeader: "rgba(0, 0, 0, 0.5)",
        profileInfoBlockText: "rgba(0, 0, 0, 0.6)",

        userName: "rgba(0, 0, 0, 0.8)",
        userLastName: "rgba(0, 0, 0, 0.6)",

        userIconFilled: "rgba(0, 0, 0, 0.3)",

        textHeadCard: "rgba(0, 0, 0, 0.8)",
        textDescCard: "rgba(0, 0, 0, 0.5)",
        cardBg: "#FFFFFF",
        cardInfo: "#FFFFFF",
        cardInfoBg: "rgba(0, 0, 0, 0.6)",
        cardButtonBg: "#F5F5F5",
        cardButtonIcon: "rgba(0, 0, 0, 0.5)",

        footerBg: "#FFFFFF",

        maclerMain: "#3DBE00",
        maclerMainHover: "#3fc700",
        maclerMainClear: "rgba(60, 190, 0, 0.1)",

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

        reportIcon: "#FF005C",

        success: "#00E75C",
        info: "#FFB800",
        warning: "#FF003D",

        buttonStroke: "#F0F0F0",
      },
      boxShadow: {
        sectionShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        cardShadow: "0px 8px 30px rgba(0, 0, 0, 0.05)",
        navbarShadow: "0px 2px 40px rgba(0, 0, 0, 0.1)",
        footerShadow: "0px -4px 30px rgba(0, 0, 0, 0.05)",

        slideNavShadow: "0px 4px 15px rgba(58, 133, 255, 0.15)",
        buttonShadow: "0px 4px 15px rgba(58, 133, 255, 0.25)",
      },
      borderRadius: {
        circle: "50%",
        normal: "10px",
        section: "12px",
        block: "14px",
      },
      fontFamily: {
        mainSemiBold: "mainSemiBold",
        mainBold: "mainBold",
        mainMedium: "mainMedium",
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
    screens: {
      medium: { max: "1330px" },
      mediumSmall: { max: "1200px" },
      small: { max: "1000px" },
      mobile: { max: "800px" },
    },
  },
  plugins: [],
};
