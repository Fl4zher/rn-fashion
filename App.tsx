import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";

import { Onboarding, Welcome } from "./src/Authentication";
import { LoadAssets, theme } from "./src/components";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.ttf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.ttf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.ttf"),
};

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
