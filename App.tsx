import "react-native-gesture-handler";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";

import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { LoadAssets } from "./src/components";
import { HomeNavigator, assets as homeAssets } from "./src/Home";
import { AppRoutes } from "./src/components/Navigation";
import { ThemeProvider } from "./src/components/Theme";
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Bold.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
};
const assets = [...authenticationAssets, ...homeAssets];
const AppStack = createStackNavigator<AppRoutes>();
export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <LoadAssets fonts={fonts} assets={assets}>
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
