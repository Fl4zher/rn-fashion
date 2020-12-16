import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";

import { HomeRoutes } from "../components/Navigation";

import { default as CustomDrawer, DRAWER_WIDTH, assets } from "./Drawer";
import OutfitIdeas from "./OutfitIdeas";
import FavoriteOutfits from "./FavoriteOutfits";
import TransactionHistory from "./TransactionHistory";
import EditProfile from "./EditProfile";
import NotificationSettings from "./NotificationSettings";
import Cart from "./Cart";

const Drawer = createDrawerNavigator<HomeRoutes>();

const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} />}
    drawerStyle={{ width: DRAWER_WIDTH }}
  >
    <Drawer.Screen name="EditProfile" component={EditProfile} />
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    <Drawer.Screen name="FavoriteOutfits" component={FavoriteOutfits} />
    <Drawer.Screen name="TransactionHistory" component={TransactionHistory} />
    <Drawer.Screen
      name="NotificationSettings"
      component={NotificationSettings}
    />
    <Drawer.Screen name="Cart" component={Cart} />
  </Drawer.Navigator>
);

export { HomeNavigator, assets };
