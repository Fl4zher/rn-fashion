import React, { Children, ReactNode, useState } from "react";
import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated, { multiply, useAnimatedStyle } from "react-native-reanimated";
import { mix, useTiming } from "react-native-redash";

import { Box, Text, useTheme } from "../../components";

const { width } = Dimensions.get("window");

interface Tab {
  id: string;
  label: string;
}
interface Props {
  tabs: Tab[];
  children: ReactNode;
}

const Tabs = ({ tabs, children }: Props) => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  // const selectedTab = tabs[index];
  const transition = useTiming(index);
  const style = useAnimatedStyle(() => ({
    transform: [
      { translateX: mix(transition.value, width * 0.25, width * 0.75) },
    ],
  }));
  const style1 = useAnimatedStyle(() => ({
    transform: [{ translateX: -width * transition.value }],
  }));
  return (
    <Box flex={1}>
      <Box flexDirection="row">
        {tabs.map((tab, i) => (
          <RectButton key={i} style={{ flex: 1 }} onPress={() => setIndex(i)}>
            <Box padding="m" style={{ paddingBottom: theme.spacing.m + 10 }}>
              <Text variant="title3" textAlign="center">
                {tab.label}
              </Text>
            </Box>
          </RectButton>
        ))}
        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: 0,
              left: -5,
              backgroundColor: theme.colors.primary,
              width: 10,
              height: 10,
              borderRadius: 5,
            },
            style,
          ]}
        />
      </Box>
      <Animated.View
        style={[
          {
            width: width * tabs.length,
            flex: 1,
            flexDirection: "row",
          },
          style1,
        ]}
      >
        {Children.map(children, (child, i) => (
          <Box paddingHorizontal="l" flex={1} key={i} width={width}>
            {child}
          </Box>
        ))}
      </Animated.View>
    </Box>
  );
};

export default Tabs;
