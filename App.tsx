import "react-native-gesture-handler";
import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";

import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { containerAssets, LoadAssets } from "./src/components";
import { theme } from "./src/components/Theme";
import { HomeNavigator, drawerAssets } from "./src/Home";
import { AppRoutes } from "./src/components/Navigation";
const assets = [...authenticationAssets, ...containerAssets, ...drawerAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Bold.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <LoadAssets {...{ fonts, assets }}>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
            <AppStack.Screen name="Home" component={HomeNavigator} />
          </AppStack.Navigator>
        </LoadAssets>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
