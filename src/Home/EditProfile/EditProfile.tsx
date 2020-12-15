import { DrawerActions } from "@react-navigation/native";
import React from "react";

import { Box, Header, Text } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Configuration from "./Configuration";
import PersonalInfo from "./PersonalInfo";
import Tabs from "./Tabs";

const tabs = [
  {
    id: "configuration",
    label: "Configuration",
  },
  {
    id: "info",
    label: "Personal Info",
  },
];

const EditProfile = ({ navigation }: HomeNavigationProps<"EditProfile">) => {
  return (
    <Box flex={1} backgroundColor="background">
      <Box flex={0.2} backgroundColor="background">
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
            title="Edit Profile"
            left={{
              icon: "menu",
              onPress: () => navigation.dispatch(DrawerActions.openDrawer()),
            }}
          />
        </Box>
      </Box>
      <Box top={-30}>
        <Box
          borderRadius="xl"
          alignSelf="center"
          backgroundColor="primary"
          width={100}
          height={100}
        />
        <Box marginVertical="l">
          <Text variant="title2" color="secondary" textAlign="center">
            Harun Kilic
          </Text>
          <Text variant="body" textAlign="center">
            harunkilic@live.dk
          </Text>
        </Box>
      </Box>
      <Tabs tabs={tabs}>
        <Configuration />
        <PersonalInfo />
      </Tabs>
    </Box>
  );
};

export default EditProfile;
