import React from "react";
import { RectButton } from "react-native-gesture-handler";

import RoundedIcon, { RoundedIconProps } from "./RoundedIcon";

interface Props extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: Props) => {
  return (
    <RectButton {...{ onPress }}>
      <RoundedIcon {...props} />
    </RectButton>
  );
};

RoundedIconButton.defaultProps = { iconRatio: 0.7 };
export default RoundedIconButton;
