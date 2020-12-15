import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";

import RoundedIcon, { RoundedIconProps } from "./RoundedIcon";

interface Props extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: Props) => {
  return (
    <BorderlessButton style={{ borderRadius: props.size }} {...{ onPress }}>
      <RoundedIcon {...props} />
    </BorderlessButton>
  );
};

RoundedIconButton.defaultProps = { ...RoundedIcon.defaultProps };
export default RoundedIconButton;
