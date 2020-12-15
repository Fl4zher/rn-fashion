import React from "react";
import { Dimensions } from "react-native";
import moment from "moment";
import { useIsFocused } from "@react-navigation/native";
import { useTransition } from "react-native-redash";
import Animated, { divide, multiply, sub } from "react-native-reanimated";

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
  const isFocused = useIsFocused();
  const transition = useTransition(isFocused, { duration: 650 });
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
          const currentHeight = multiply(totalHeight, transition);
          const translateY = divide(sub(totalHeight, currentHeight), 2);
          return (
            <AnimatedBox
              key={point.id}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={totalHeight}
              style={{ transform: [{ translateY }, { scaleY: transition }] }}
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
