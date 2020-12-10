import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text } from "../../components";

import SocialLogin from "./SocialLogin";

interface Props {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ title, action, onPress }: Props) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="l">
        <BorderlessButton onPress={onPress}>
          <Text color="white" variant="button">
            <Text>{`${title} `}</Text>
            <Text color="primary">{`${action} `}</Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
  );
};

export default Footer;
