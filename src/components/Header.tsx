import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Text } from "./Theme";

import { RoundedIconButton } from ".";

interface Props {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right: {
    icon: string;
    onPress: () => void;
  };
  dark?: boolean;
}

const Header = ({ left, title, right, dark }: Props) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "secondary" : "white";
  const backgroundColor = dark ? "lightGrey" : "secondary";
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="l"
      style={{ marginTop: insets.top }}
    >
      <RoundedIconButton
        size={44}
        iconRatio={0.4}
        name={left.icon}
        onPress={left.onPress}
        {...{ color, backgroundColor }}
      />
      <Text variant="header" {...{ color }}>
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        size={44}
        iconRatio={0.4}
        name={right.icon}
        onPress={right.onPress}
        {...{ color, backgroundColor }}
      />
    </Box>
  );
};

export default Header;
