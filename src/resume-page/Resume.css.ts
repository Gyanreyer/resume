import { style, globalStyle } from "@vanilla-extract/css";

import { themeVars } from "./sharedStyles.css";

export const main = style({
  display: "flex",
  gap: themeVars.spacing.gutter,
  padding: themeVars.spacing.gutter,
});

export const sidebar = style({
  backgroundColor: themeVars.color.accentColor,
  padding: `2rem ${themeVars.spacing.gutter} 5rem`,
  minWidth: "37%",
  height: `calc(100vh - 2 * ${themeVars.spacing.gutter})`,
  boxSizing: "border-box",
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
  padding: `1rem ${themeVars.spacing.gutter} 0 0`,
});

globalStyle(`${mainArticle} h2`, {
  color: themeVars.color.headingText,
});
