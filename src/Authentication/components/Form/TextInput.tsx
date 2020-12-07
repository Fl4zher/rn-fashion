import React from "react";
import { StyleSheet, TextInput as Input, TextInputProps } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, theme } from "../../../components";

interface Props extends TextInputProps {
  placeholder: string;
  icon: string;
  error?: string;
  touched?: boolean;
}

const SIZE = theme.borderRadii.m * 2;

const TextInput = ({ icon, error, touched, ...props }: Props) => {
  // eslint-disable-next-line no-nested-ternary
  const reColor = !touched ? "darkGrey" : error ? "danger" : "primary";
  const color = theme.colors[reColor];
  return (
    <Box
      padding="s"
      flexDirection="row"
      height={48}
      borderRadius="s"
      borderColor={reColor}
      borderWidth={StyleSheet.hairlineWidth}
      alignItems="center"
    >
      <Box padding="s">
        <Icon name={icon as never} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <Input
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          backgroundColor={reColor}
          alignItems="center"
          justifyContent="center"
        >
          <Icon name={!error ? "check" : "x"} color="white" size={16} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
