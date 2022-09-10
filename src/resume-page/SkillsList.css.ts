import { style, globalStyle } from "@vanilla-extract/css";

export const skillsList = style({
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "0.15rem 1rem",
  padding: 0,
  margin: 0,
});

globalStyle(`${skillsList} li`, {
  margin: "0",
});
