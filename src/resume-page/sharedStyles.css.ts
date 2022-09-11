import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const themeVars = createGlobalTheme(":root", {
  color: {
    background: "#fff",
    accentColor: "#a2c4c9",
    text: "#43",
    accentContrast: "#fff",
    headingText: "#2c838f",
  },
  spacing: {
    gutter: "1.5rem",
  },
});

export const mobileBreakpointMediaQuery = `screen and (max-width: 520px)`;

globalStyle("html, body", {
  margin: 0,
  backgroundColor: themeVars.color.background,
});

globalStyle("body", {
  margin: "0 auto",
  maxWidth: "60rem",
});

globalStyle(":root", {
  fontSize: "16px",
  color: themeVars.color.text,
  fontFamily: [
    // Just try to use the nicest available version of helvetica
    "HelveticaNeue-Light",
    "Helvetica Neue Light",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "Lucida Grande",
    "sans-serif",
  ],
  lineHeight: 1.2,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  lineHeight: 1,
});

globalStyle("p", {
  margin: "0 0 1rem",
});

globalStyle("h1", {
  fontSize: "4rem",
});

globalStyle("h2", {
  fontSize: "1.5rem",
});

globalStyle("h3", {
  fontSize: "1.2rem",
});

globalStyle("h4, h5, h6", {
  fontSize: "1rem",
});
