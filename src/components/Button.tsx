import { useTheme } from "@shopify/restyle";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Theme } from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: "SFProText-Regular",
    fontSize: 15,
    textAlign: "center",
  },
});

interface Props {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}

const Button = ({ variant, label, onPress }: Props) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.body;
  const color = variant === "primary" ? theme.colors.body : theme.colors.title;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: "default",
};

export default Button;
