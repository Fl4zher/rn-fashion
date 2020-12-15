import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import {
  createBox,
  createText,
  useTheme as useReTheme,
} from "@shopify/restyle";

const fonts = {
  regular: "SFProDisplay-Regular",
  bold: "SFProDisplay-Bold",
  medium: "SFProDisplay-Medium",
  semiBold: "SFProDisplay-Semibold",
};
export const theme = {
  colors: {
    primary: "#2CB9B0",
    primaryLight: "#E7F9F7",
    secondary: "#0C0D34",
    danger: "#FF0058",
    text: "rgba(12,13,52,0.7)",
    white: "white",
    grey: "#F4F0EF",
    lightGrey: "#FAFAFA",
    darkGrey: "#8A8D90",
    orange: "#FE5E33",
    yellow: "#FFC641",
    pink: "#FF87A2",
    violet: "#442CB9",
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
  breakpoints: {},
};

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
