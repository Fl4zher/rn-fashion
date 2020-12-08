import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { AuthRoutes, StackNavigationProps } from "../components/Navigation";
import { Box, Button, Container, Text } from "../components";

import CloseButton from "./components/CloseButton";

const SIZE = 60;
const PasswordChanged = ({
  navigation,
}: StackNavigationProps<AuthRoutes, "PasswordChanged">) => {
  return (
    <Container
      footer={
        <Box flexDirection="row" justifyContent="center">
          <CloseButton onPress={() => navigation.navigate("Login")} />
        </Box>
      }
    >
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box
          backgroundColor="primaryLight"
          justifyContent="center"
          alignItems="center"
          marginBottom="xl"
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
        >
          <Text color="primary" textAlign="center" fontSize={32}>
            <Icon name="check" size={32} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Your password was succesfully changed
        </Text>
        <Text variant="body" opacity={0.5} textAlign="center" marginBottom="l">
          Close this window and login again
        </Text>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={() => navigation.navigate("Login")}
            label="Login again"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
