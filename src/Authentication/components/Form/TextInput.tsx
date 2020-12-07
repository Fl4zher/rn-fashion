import React, { forwardRef } from "react";
import { StyleSheet, TextInput as Input, TextInputProps } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, useTheme } from "../../../components";

interface Props extends TextInputProps {
  placeholder: string;
  icon: string;
  error?: string;
  touched?: boolean;
}

const TextInput = forwardRef<Input, Props>(
  ({ icon, error, touched, ...props }: Props, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 1.8;
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
          <Icon
            name={icon as never}
            size={16}
            {...{ color }}
            style={{ textAlign: "center" }}
          />
        </Box>
        <Box flex={1}>
          <Input
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            {...{ ref }}
            {...props}
          />
        </Box>
        {touched && (
          <Box
            height={SIZE}
            width={SIZE}
            // borderRadius="m"
            backgroundColor={reColor}
            alignItems="center"
            justifyContent="center"
            style={{ borderRadius: SIZE / 2 }}
          >
            <Icon
              name={!error ? "check" : "x"}
              color="white"
              size={20}
              style={{ textAlign: "center" }}
            />
          </Box>
        )}
      </Box>
    );
  }
);

export default TextInput;
