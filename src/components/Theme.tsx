import { createBox, createText } from "@shopify/restyle";

const fonts = {
  regular: "SFProDisplay-Regular",
  bold: "SFProDisplay-Bold",
  medium: "SFProDisplay-Medium",
  semiBold: "SFProDisplay-Semibold",
};
const theme = {
  colors: {
    primary: "#2CB9B0",
    title: "#0C0D34",
    text: "rgba(12,13,52,0.7)",
    white: "white",
    grey: "#rgba(12, 13, 52, 0.05)",
    lightGrey: "#F4F0EF",
  },
  spacing: {
    s: 4,
    m: 10,
    l: 25,
    xl: 40,
  },
  borderRadius: {
    s: 8,
    m: 16,
    l: 24,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: fonts.bold,
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: fonts.semiBold,
      color: "text",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: fonts.semiBold,
      color: "text",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fonts.regular,
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: fonts.medium,
      color: "text",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
