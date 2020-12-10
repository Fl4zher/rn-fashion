import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image } from "react-native";

import { Box, Header, Text } from "../../components";
import { theme } from "../../components/Theme";

import DrawerItem, { DrawerItemProps } from "./DrawerItem";

export const drawerBackground = [
  require("../../components/assets/patterns/5.png"),
];
const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 300 / 300;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favorites Outfits",
    screen: "FavoritesOutfits",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notification Settings",
    screen: "NotificationSettings",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "Logout",
    color: "secondary",
  },
];

const Drawer = (_props: DrawerContentComponentProps<DrawerContentOptions>) => {
  const navigation = useNavigation();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          <Header
            title="My Profile"
            left={{
              icon: "x",
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
            }}
            right={{ icon: "shopping-bag", onPress: () => true }}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          //borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box top={-theme.spacing.xl * 2}>
            <Box
              borderRadius="xl"
              alignSelf="center"
              backgroundColor="primary"
              width={100}
              height={100}
            />
            <Box marginVertical="l">
              <Text variant="title2" textAlign="center">
                Harun Kilic
              </Text>
              <Text variant="body" textAlign="center">
                harunkilic@live.dk
              </Text>
            </Box>
          </Box>
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>

      <Box
        // backgroundColor="primary"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.3}
      >
        <Image
          source={drawerBackground[0]}
          style={{
            height,
            width: DRAWER_WIDTH,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
        {/* <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderTopLeftRadius="xl"
          backgroundColor="primary"
        /> */}
      </Box>
    </Box>
  );
};

export default Drawer;
