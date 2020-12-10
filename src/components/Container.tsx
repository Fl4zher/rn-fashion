import React, { ReactNode } from "react";
import { Dimensions, Image, Platform, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Constants from "expo-constants";

import { Box, useTheme } from "./Theme";

export const assets = [
  require("./assets/patterns/12.png"),
  require("./assets/patterns/8.png"),
  require("./assets/patterns/4.png"),
  require("./assets/patterns/2.png"),
] as const;

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 300 / 300;
const height = width * aspectRatio;

interface Props {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2 | 3;
}

const Container = ({ children, footer, pattern }: Props) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const asset = assets[pattern];

  return (
    <KeyboardAwareScrollView bounces={false} scrollEnabled={false}>
      <Box
        height={
          wHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0)
        }
        backgroundColor="secondary"
      >
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.41}
          >
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.41,
              backgroundColor: "white",
            }}
          />

          <Box
            flex={1}
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
            padding="xl"
            justifyContent="center"
          >
            {children}
          </Box>
        </Box>
        <Box backgroundColor="secondary" paddingTop="m">
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
