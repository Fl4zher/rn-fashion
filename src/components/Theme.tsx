import { BaseTheme, createText } from "@shopify/restyle";

const fonts = {
  regular: "SFProText-Regular",
  bold: "SFProText-Bold",
  semiBold: "SFProText-Semibold",
};
const theme: BaseTheme = {
  colors: {
    primary: "#2CB9B0",
    title: "#0C0D34",
    text: "rgba(12,13,52,0.7)",
    white: "white",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
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
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;
