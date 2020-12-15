import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";

import { Text } from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface Props {
  variant: "default" | "primary";
  onPress: () => void;
  label?: string;
  style?: RectButtonProperties["style"];
}

const Button = ({ variant, label, onPress, style }: Props) => {
  const theme = useTheme();
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.background2;

  const color =
    variant === "primary" ? theme.colors.background : theme.colors.secondary;
  return (
    <RectButton
      style={[styles.container, style, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: "default",
};

export default Button;
