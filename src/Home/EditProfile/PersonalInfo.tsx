import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import TextInput from "../../Authentication/components/Form/TextInput";
import { Box, Text } from "../../components";

import CheckboxGroup from "./CheckboxGroup";

const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const PersonalInfo = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="body" marginBottom="m">
          Account information
        </Text>
        <Box marginVertical="m">
          <TextInput
            icon="user"
            placeholder="Name"
            autoCapitalize="none"
            autoCompleteType="name"
          />
        </Box>
        <Box marginVertical="m">
          <TextInput
            icon="lock"
            placeholder="Enter your password"
            autoCapitalize="none"
            autoCompleteType="password"
            secureTextEntry
          />
        </Box>
        <Box marginVertical="m">
          <TextInput
            icon="map-pin"
            placeholder="Address"
            autoCapitalize="none"
            autoCompleteType="street-address"
          />
        </Box>
        <CheckboxGroup options={genders} radio />
      </Box>
    </ScrollView>
  );
};

export default PersonalInfo;
