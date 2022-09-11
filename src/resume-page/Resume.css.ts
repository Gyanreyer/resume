import { style, globalStyle, keyframes } from "@vanilla-extract/css";

import { mobileBreakpointMediaQuery, themeVars } from "./sharedStyles.css";

export const main = style({
  display: "grid",
  gridTemplateColumns: "6fr 10fr",
  columnGap: themeVars.spacing.gutter,
  padding: themeVars.spacing.gutter,
  "@media": {
    [mobileBreakpointMediaQuery]: {
      gridTemplateColumns: "1fr",
    },
  },
});

export const sidebar = style({
  backgroundColor: themeVars.color.accentColor,
  padding: `2rem ${themeVars.spacing.gutter} 5rem`,
  height: `calc(100vh - 2 * ${themeVars.spacing.gutter})`,
  boxSizing: "border-box",
  position: "relative",
  "@media": {
    [mobileBreakpointMediaQuery]: {
      height: "auto",
    },
  },
});

export const headline = style({
  color: themeVars.color.accentContrast,
  margin: "0 0 1rem",
});

export const subheadline = style({
  color: themeVars.color.accentContrast,
  fontWeight: "normal",
  margin: 0,
});

export const sectionHeading = style({
  fontSize: "1.5rem",
  margin: "2rem 0 0.75rem",
});

export const sidebarSectionParagraph = style({
  lineHeight: "1.2",
  margin: 0,
});

export const mainArticle = style({
  padding: `1rem ${themeVars.spacing.gutter} 2rem 0`,
  "@media": {
    [mobileBreakpointMediaQuery]: {
      paddingTop: "0",
    },
  },
});

globalStyle(`${mainArticle} h2`, {
  color: themeVars.color.headingText,
});

const floatAnimation = keyframes({
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-10%)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});

export const downloadLink = style({
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "2.5rem",
  height: "2.5rem",
  padding: "0.4rem",
  color: themeVars.color.accentContrast,
  textDecoration: "none",
  ":hover": {
    animation: `${floatAnimation} ease-in-out 2s infinite`,
  },
  "@media": {
    print: {
      display: "none",
    },
    [mobileBreakpointMediaQuery]: {
      bottom: "unset",
      left: "unset",
      top: "0.25rem",
      right: "0.25rem",
    },
  },
});

globalStyle(`${downloadLink} svg`, {
  fill: "currentcolor",
  width: "100%",
  height: "auto",
});
