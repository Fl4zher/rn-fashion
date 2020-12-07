import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box } from "../../components";

interface Props {
  onPress: () => void;
}
const SIZE = 60;

const CloseButton = ({ onPress }: Props) => {
  return (
    <RectButton {...{ onPress }}>
      <Box
        style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
      >
        <Icon name="x" size={45} />
      </Box>
    </RectButton>
  );
};

export default CloseButton;
