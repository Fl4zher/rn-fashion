import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Text, Theme } from "./Theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio: number;
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;
  return (
    <Box
      height={size}
      width={size}
      backgroundColor={backgroundColor}
      alignItems="center"
      justifyContent="center"
      style={{ borderRadius: size / 2 }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={iconSize} name={name as never} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = { iconRatio: 0.7 };

export default RoundedIcon;
