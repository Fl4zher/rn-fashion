import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Button } from "../../components";

interface Props {
  label: string;
  onPress: () => void;
}

const Footer = ({ label, onPress }: Props) => {
  const inset = useSafeAreaInsets();
  return (
    <Box backgroundColor="secondary" borderTopLeftRadius="xl">
      <Box
        justifyContent="center"
        alignItems="center"
        style={{ paddingVertical: inset.bottom }}
      >
        <Button variant="primary" {...{ label, onPress }} />
      </Box>
    </Box>
  );
};

export default Footer;
