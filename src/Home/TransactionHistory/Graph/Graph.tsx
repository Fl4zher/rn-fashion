import React from "react";
import { Dimensions } from "react-native";
import moment from "moment";
import { useFocusEffect } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Box, useTheme } from "../../../components";
import { Theme } from "../../../components/Theme";

import { lerp } from "./Helpers";
import Underlay from "./Underlay";

const { width: wWidth } = Dimensions.get("window");

const aspectRatio = 195 / 305;
const AnimatedBox = Animated.createAnimatedComponent(Box);
export interface Point {
  id: number;
  date: number;
  value: number;
  color: keyof Theme["colors"];
}
interface Props {
  data: Point[];
  startDate: number;
  numberOfMonths: number;
}

const MARGIN = "xl";

const Graph = ({ data, startDate, numberOfMonths }: Props) => {
  const transition = useSharedValue(0);
  useFocusEffect(() => {
    transition.value = withTiming(1, { duration: 650 });
    return () => (transition.value = 0);
  });
  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];

  const values = data.map((p) => p.value);
  // const dates = data.map((p) => p.date);

  // const minX = Math.min(...dates);
  // const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  const step = width / numberOfMonths;

  return (
    <Box paddingBottom={MARGIN} paddingLeft="xl" marginTop={MARGIN}>
      <Underlay
        minY={minY}
        maxY={maxY}
        startDate={startDate}
        numberOfMonths={numberOfMonths}
        step={step}
      />
      <Box style={{ width, height, overflow: "hidden" }}>
        {data.map((point) => {
          const i = Math.round(
            moment.duration(moment(point.date).diff(startDate)).asMonths()
          );
          const totalHeight = lerp(0, height, point.value / maxY);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const style = useAnimatedStyle(() => {
            const currentHeight = totalHeight * transition.value;
            const translateY = (totalHeight - currentHeight) / 2;
            return {
              transform: [{ translateY }, { scaleY: transition.value }],
            };
          });
          return (
            <AnimatedBox
              key={point.id}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={totalHeight}
              style={style}
            >
              <Box
                position="absolute"
                top={0}
                bottom={0}
                right={theme.spacing.m * 1.5}
                left={theme.spacing.m * 1.5}
                backgroundColor={point.color}
                opacity={0.1}
                borderTopLeftRadius="m"
                borderTopRightRadius="m"
              />

              <Box
                position="absolute"
                top={0}
                height={35}
                right={theme.spacing.m * 1.5}
                left={theme.spacing.m * 1.5}
                backgroundColor={point.color}
                borderRadius="m"
              />
            </AnimatedBox>
          );
        })}
      </Box>
    </Box>
  );
};

export default Graph;
