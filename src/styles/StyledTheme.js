// This is literally just a JS object that is passed into <ThemeProvider> in _app.js

export const globals = {
  fonts: {
    fontColor: "#333333",
    aboutFontColor: "#666666",
    fontFamily: "'Jost', sans-serif",
  },
  colors: {
    headerBGColor: "#ffffffcc",
    headerBlur: "blur(5px)",
    headerFontColor: "#333333",
    footerColorDark: "#000000",
    footerColor: "#010101",
  },
  effects: {
    dropShadow: "drop-shadow(4px 4px 4px #00000066)",
    dropShadow2: "drop-shadow(3px 3px 4px #00000033)",
  },
  layout: {
    contentWidth: "120rem",
    emuHeaderHeight: "5rem",
  },
};
