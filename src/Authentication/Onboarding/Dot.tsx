import React from "react";
import { StyleSheet } from "react-native";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";

interface Props {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Dot = ({ index, currentIndex }: Props) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.3, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={[styles.container, { opacity, transform: [{ scale }] }]}
    />
  );
};

export default Dot;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2CB9B0",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 4,
  },
});
