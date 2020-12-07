import React, { ReactNode } from "react";
import { Dimensions, Image, Platform, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Constants from "expo-constants";

import { Box, useTheme } from "./Theme";

export const assets = [require("./assets/patterns/12.png")];

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 300 / 300;
const height = width * aspectRatio;

interface Props {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: Props) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

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
              source={assets[0]}
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
            source={assets[0]}
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
