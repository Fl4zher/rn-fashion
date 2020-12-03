import React from "react";
import { View, Text } from "react-native";

interface Props {}

const Onboarding = (props: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "cyan" }}>
      <Text>OnBoarding</Text>
    </View>
  );
};

export default Onboarding;
