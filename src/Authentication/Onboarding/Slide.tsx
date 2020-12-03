import React from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";

import { Text } from "../../components";
const { width, height } = Dimensions.get("window");

export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;
const styles = StyleSheet.create({
  container: {
    width,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    top: BORDER_RADIUS * 2,
    borderBottomRightRadius: 75,
  },
  titleContainer: {
    justifyContent: "center",
    height: 100,
  },
});

interface Props {
  title: string;
  right?: boolean;
  picture: number;
}

const Slide = ({ title, right, picture }: Props) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.image} />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
