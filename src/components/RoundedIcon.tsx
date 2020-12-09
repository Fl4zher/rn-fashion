import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Text, Theme } from "./Theme";

interface Props {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
}

const RoundedIcon = ({ name, size, color, backgroundColor }: Props) => {
  const iconSize = size * 0.8;
  return (
    <Box
      height={size}
      width={size}
      // borderRadius="m"
      backgroundColor={backgroundColor}
      alignItems="center"
      justifyContent="center"
      style={{ borderRadius: size / 2 }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon
          color="white"
          size={iconSize}
          style={{ textAlign: "center" }}
          name={name as never}
        />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
