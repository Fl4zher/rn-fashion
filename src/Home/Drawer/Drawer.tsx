import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, RoundedIconButton, Text } from "../../components";
import { theme } from "../../components/Theme";

import DrawerItem, { DrawerItemProps } from "./DrawerItem";

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
  const insets = useSafeAreaInsets();
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
          flexDirection="row"
          justifyContent="space-between"
          paddingHorizontal="l"
          style={{ paddingTop: insets.top }}
        >
          <RoundedIconButton
            size={24}
            name="x"
            color="white"
            backgroundColor="secondary"
            onPress={() => true}
          />
          <Text color="white">MY PROFILE</Text>
          <RoundedIconButton
            size={24}
            name="shopping-bag"
            color="white"
            backgroundColor="secondary"
            onPress={() => true}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box flex={1} backgroundColor="primary" />

        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
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
        backgroundColor="white"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.41}
      >
        <Image
          source={require("../../components/assets/patterns/5.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            height: undefined,
            width: undefined,
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
