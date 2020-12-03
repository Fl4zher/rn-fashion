import React from "react";
import { View, Text } from "react-native";

import { Box } from "../../components";

interface Props { }

const Welcome = (props: Props) => {
  return (
    <Box flex={1}>
      <Box flex={1} borderBottomRightRadius="xl" backgroundColor="lightGrey" />
      <Text>TEST</Text>
      <Box flex={1} borderTopLeftRadius="xl" />
    </Box>
  );
};

export default Welcome;
