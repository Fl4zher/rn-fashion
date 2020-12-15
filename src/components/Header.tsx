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
  right?: {
    icon: string;
    onPress: () => void;
  };
  dark?: boolean;
}

const Header = ({ left, title, right, dark }: Props) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "secondary" : "background";
  const backgroundColor = dark ? undefined : "secondary";
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
        align={backgroundColor === undefined ? "flex-start" : "center"}
        {...{ color, backgroundColor }}
      />
      <Text variant="header" {...{ color }}>
        {title.toUpperCase()}
      </Text>
      {right ? (
        <RoundedIconButton
          size={44}
          iconRatio={0.4}
          name={right.icon}
          onPress={right.onPress}
          {...{ color, backgroundColor }}
        />
      ) : (
          <Box width={44} />
        )}
    </Box>
  );
};

export default Header;
