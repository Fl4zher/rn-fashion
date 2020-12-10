import React from "react";
import { Image, StyleSheet } from "react-native";

import { Box, useTheme } from "../../components";

interface Props { }

const Background = (props: Props) => {
  const theme = useTheme();
  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} backgroundColor="primary">
        <Box flex={1} backgroundColor="white" borderBottomRightRadius="xl" />
      </Box>
      <Box flex={1 / 3}>
        <Box flex={1} backgroundColor="white" />
        <Box flex={1} backgroundColor="secondary" />
        <Image
          source={require("./assets/1.jpg")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            resizeMode: "repeat",
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1 / 3} backgroundColor="primary">
        <Box flex={1} backgroundColor="secondary" borderTopLeftRadius="xl" />
      </Box>
    </Box>
  );
};

export default Background;
