import React, { useState } from "react";
import { Switch } from "react-native";

import { Box, Text, useTheme } from "../../components";

interface Props {
  title: string;
  description: string;
}

const Notification = ({ title, description }: Props) => {
  const [toggled, setToggled] = useState(false);
  const theme = useTheme();
  return (
    <Box flexDirection="row" marginBottom="l">
      <Box flex={1} justifyContent="center">
        <Text variant="title3">{title}</Text>
        <Text variant="body">{description}</Text>
      </Box>
      <Box paddingVertical="l">
        <Switch
          value={toggled}
          onValueChange={setToggled}
          trackColor={{
            true: theme.colors.primary,
            false: theme.colors.background2,
          }}
        />
      </Box>
    </Box>
  );
};

export default Notification;
