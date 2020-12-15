import React from "react";
import { StyleSheet } from "react-native";

import { Box, Content, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Notification from "./Notification";

const Settings = ({
  navigation,
}: HomeNavigationProps<"NotificationSettings">) => {
  return (
    <Content>
      <Box backgroundColor="background">
        <Header
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          title="Notification Settings"
          dark
        />
        <Box padding="l">
          <Notification
            title="Outfit Ideas"
            description="Receive daily notifications"
          />
          <Notification
            title="Discount & Sales"
            description="Buy the stuff you love for less"
          />
          <Notification
            title="Stock Notifications"
            description="If the product you love comes back in stock"
          />
          <Notification
            title="New Stuff"
            description="Hear it first, wear it first"
          />
        </Box>
      </Box>
    </Content>
  );
};

export default Settings;
