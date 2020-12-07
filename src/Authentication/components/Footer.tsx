import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

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
        <TouchableWithoutFeedback onPress={onPress}>
          <Text color="white" variant="button">
            <Text>{`${title} `}</Text>
            <Text color="primary">{`${action} `}</Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
};

export default Footer;
