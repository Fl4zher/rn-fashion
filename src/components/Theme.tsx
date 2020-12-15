import React, { ReactNode } from "react";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import {
  createBox,
  createText,
  useTheme as useReTheme,
  ThemeProvider as Provider,
} from "@shopify/restyle";

const fonts = {
  regular: "SFProDisplay-Regular",
  bold: "SFProDisplay-Bold",
  medium: "SFProDisplay-Medium",
  semiBold: "SFProDisplay-Semibold",
};

export const palette = {
  white: "#fff",
  orange: "#FE5E33",
  yellow: "#FFC641",
  pink: "#FF87A2",
  violet: "#442CB9",
  green: "#2CB9B0",
};

const theme = {
  colors: {
    primary: palette.green,
    primaryLight: "#E7F9F7",
    secondary: "#0C0D34",
    danger: "#FF0058",
    info: "#8A8D90",
    text: "rgba(12,13,52,0.7)",
    background: palette.white,
    background2: "#F4F0EF",
    graph1: palette.orange,
    graph2: palette.yellow,
    drawer1: palette.orange,
    drawer2: palette.yellow,
    drawer3: palette.pink,
    drawer4: palette.violet,
  },
  spacing: {
    s: 4,
    m: 10,
    l: 25,
    xl: 40,
  },
  borderRadii: {
    xs: 4,
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
      color: "background",
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
    title3: {
      fontSize: 16,
      fontFamily: fonts.semiBold,
      color: "secondary",
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
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: fonts.semiBold,
      color: "secondary",
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <Provider theme={theme}>{children}</Provider>
);

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
// export default theme;
