import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text } from "../../../components";

interface Props {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, onChange, checked }: Props) => {
  return (
    <BorderlessButton
      onPress={() => onChange()}
      style={{ justifyContent: "center" }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="m"
          height={20}
          width={20}
          alignItems="center"
          justifyContent="center"
          borderWidth={1}
          borderColor="primary"
          borderRadius="xs"
          backgroundColor={checked ? "primary" : "background"}
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </BorderlessButton>
  );
};

export default Checkbox;
