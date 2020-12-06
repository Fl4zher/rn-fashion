import React, { ReactNode } from "react";
import { Dimensions, Image, StatusBar, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import theme, { Box } from "./Theme";

export const assets = [require("./assets/patterns/12.png")];

const { width } = Dimensions.get("window");
const aspectRatio = 300 / 300;
const height = width * aspectRatio;

interface Props {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box borderBottomLeftRadius="xl">
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
            height={150}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -180,
            left: 0,
            backgroundColor: "white",
          }}
        />

        <Box
          flex={1}
          borderRadius="xl"
          borderTopLeftRadius={0}
          backgroundColor="white"
        >
          {children}
        </Box>
      </Box>
      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  );
};

export default Container;
