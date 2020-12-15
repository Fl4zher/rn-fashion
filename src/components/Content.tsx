import React, { ReactNode } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

import { Box, useTheme } from "./Theme";

const { width } = Dimensions.get("window");

const viewBox = {
  width: 375,
  height: 100,
};
const height = (100 * width) / viewBox.width;
const d = "M 0 0 H 375 A 50 50 0 0 1 325 50 H 50 A 0 50 0 0 0 0 100";

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  image: {
    width,
    height: width * (240 / 320),
    backgroundColor: "black",
  },
});

interface Props {
  children: ReactNode;
}

const Content = ({ children }: Props) => {
  const theme = useTheme();
  return (
    <>
      <Box style={styles.background}>
        <Image
          source={require("./assets/patterns/Aare.png")}
          style={styles.image}
        />
      </Box>
      {children}
      <Svg
        width={width}
        height={height}
        viewBox={[0, 0, viewBox.width, viewBox.height].join(" ")}
      >
        <Path fill={theme.colors.background} d={d} />
      </Svg>
    </>
  );
};

export default Content;
