import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthRoutes } from "../components/Navigation";

import Onboarding, { assets as onBoardingAssets } from "./Onboarding";
import Welcome, { assets as welcomeAssets } from "./Welcome";
import Login, { assets as LoginAssets } from "./Login";

export const assets = [...onBoardingAssets, ...welcomeAssets];

const AuthenticationStack = createStackNavigator<AuthRoutes>();
export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
