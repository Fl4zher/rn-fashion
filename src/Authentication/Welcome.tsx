import React from "react";
import { Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
import { Box, useTheme, Text, Button } from "../components";
import { AuthRoutes, StackNavigationProps } from "../components/Navigation";

const picture = {
  src: require("./assets/6.png"),
  width: 1024,
  height: 636,
};
export const assets = [picture.src];
const Welcome = ({
  navigation,
}: StackNavigationProps<AuthRoutes, "Welcome">) => {
  const theme = useTheme();

  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          flex={1}
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            onPress={() => navigation.navigate("Login")}
            variant="primary"
            label="Have an account? Login"
          />
          <Button
            onPress={() => navigation.navigate("Signup")}
            label="Join us, it's Free"
          />
          <Button
            onPress={() => navigation.navigate("ForgotPassword")}
            variant="transparent"
            label="Forgot Password?"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
