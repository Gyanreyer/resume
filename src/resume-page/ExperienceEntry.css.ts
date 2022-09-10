import { globalStyle, style } from "@vanilla-extract/css";

export const experienceEntry = style({
  margin: "0 0.1rem",
});

export const title = style({
  margin: "1rem 0 0.4rem",
});

export const subtitle = style({
  fontSize: "1.1rem",
  margin: "0.3rem 0",
});

export const techStack = style({
  fontSize: "0.9rem",
  margin: "0.2rem",
});

globalStyle(`${techStack} em`, {
  display: "block",
  marginBottom: "0.2rem",
});

globalStyle(`${experienceEntry} ul`, {
  margin: "0.4rem 0",
  paddingLeft: "1.5rem",
});

globalStyle(`${experienceEntry} ul li`, {
  margin: "0.1rem  0",
});

globalStyle(`${experienceEntry} ul ul`, {
  margin: 0,
});
