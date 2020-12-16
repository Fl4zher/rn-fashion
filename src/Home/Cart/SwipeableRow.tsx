import React, { ReactNode, useCallback, useRef } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import { LinearGradient } from "expo-linear-gradient";

import { aspectRatio, RoundedIconButton, useTheme } from "../../components";
import { Box, Text } from "../../components/Theme";

interface Props {
  children: ReactNode;
  onDelete: () => void;
  height: number;
}
const { width } = Dimensions.get("window");
const finalDestination = width;
const editWidth = 85 * aspectRatio;
const snapPoints = [-editWidth, 0, finalDestination];

const SwipeableRow = ({ children, height: defaultHeight, onDelete }: Props) => {
  const theme = useTheme();
  const deleteItem = useCallback(() => {
    onDelete();
  }, [onDelete]);
  const height = useSharedValue(defaultHeight);
  const translateX = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<{ x: number }>({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = ctx.x + translationX;
    },
    onEnd: ({ velocityX }) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints);
      translateX.value = withSpring(dest, { overshootClamping: true }, () => {
        if (dest === finalDestination) {
          height.value = withTiming(0, { duration: 250 }, () => deleteItem());
        }
      });
    },
  });
  const style = useAnimatedStyle(() => ({
    height: height.value,
    backgroundColor: theme.colors.background,
    transform: [{ translateX: translateX.value }],
  }));

  const deleteStyle = useAnimatedStyle(() => ({
    opacity: translateX.value > 0 ? 1 : 0,
  }));
  const editStyle = useAnimatedStyle(() => ({
    opacity: translateX.value < 0 ? 1 : 0,
  }));

  return (
    <Box>
      <Animated.View style={[StyleSheet.absoluteFillObject, deleteStyle]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[theme.colors.danger, theme.colors.background]}
          start={[0, 0.5]}
          end={[1, 0.5]}
        />
        <Box
          justifyContent="space-evenly"
          width={editWidth}
          alignItems="center"
          flex={1}
        >
          <Text color="background" variant="header">
            DELETE
          </Text>
        </Box>
      </Animated.View>
      <Animated.View style={[StyleSheet.absoluteFillObject, editStyle]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[theme.colors.edit, theme.colors.background]}
          start={[1, 0.5]}
          end={[0.7, 0.5]}
        />
        <Box
          justifyContent="space-evenly"
          width={editWidth}
          alignSelf="flex-end"
          alignItems="center"
          flex={1}
        >
          <RoundedIconButton
            name="plus"
            onPress={() => alert("BUTTON1")}
            color="background"
            size={24}
            backgroundColor="primary"
          />
          <RoundedIconButton
            name="minus"
            onPress={() => alert("BUTTON2")}
            color="background"
            size={24}
            backgroundColor="danger"
          />
        </Box>
      </Animated.View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>{children}</Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default SwipeableRow;
