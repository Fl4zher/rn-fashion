import "react-native-gesture-handler";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { containerAssets, LoadAssets } from "./src/components";
import { HomeNavigator, drawerAssets } from "./src/Home";
import { AppRoutes } from "./src/components/Navigation";
import { ThemeProvider } from "./src/components/Theme";
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Bold.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
};
// const assets = [...authenticationAssets, ...containerAssets, ...drawerAssets];
const AppStack = createStackNavigator<AppRoutes>();
export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <LoadAssets>
          <Text>TEST</Text>
          <AppStack.Navigator>
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
            {/* <AppStack.Screen name="Home" component={HomeNavigator} /> */}
          </AppStack.Navigator>
        </LoadAssets>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
