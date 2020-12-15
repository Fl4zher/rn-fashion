import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, {
  divide,
  Extrapolate,
  interpolate,
  multiply,
} from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";

import { AuthNavigationProps } from "../../components/Navigation";
import { makeStyles, useTheme } from "../../components";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";

const { width } = Dimensions.get("window");

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: "cyan",
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
}));

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5",
    picture: {
      src: require("../assets/1.png"),
      width: 877,
      height: 1000,
    },
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Ware it First",
    description:
      "Heating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
    picture: {
      src: require("../assets/2.png"),
      width: 1261,
      height: 883,
    },
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    picture: {
      src: require("../assets/3.png"),
      width: 1024,
      height: 681,
    },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: {
      src: require("../assets/4.png"),
      width: 981,
      height: 879,
    },
  },
];

export const assets = slides.map((slice) => slice.picture.src);

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
  const theme = useTheme();
  const styles = useStyles();
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor: Animated.Node<number> = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View key={index} style={[styles.underlay, { opacity }]}>
              <Image
                source={picture.src}
                style={{
                  width: width - theme.borderRadii.xl,
                  height:
                    ((width - theme.borderRadii.xl) * picture.height) /
                    picture.width,
                }}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide {...{ title, picture }} right={!!(index % 2)} key={index} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <Animated.View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />

        <View style={[styles.footerContent]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot
                key={index}
                currentIndex={divide(x, width)}
                {...{ index, x }}
              />
            ))}
          </View>
          <Animated.View
            style={{
              flexDirection: "row",
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else if (scroll.current) {
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  last={last}
                  {...{ subtitle, description }}
                />
              );
            })}
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

export default Onboarding;
