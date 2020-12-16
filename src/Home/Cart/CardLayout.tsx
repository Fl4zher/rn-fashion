import { BoxProps } from "@shopify/restyle";
import React, { ReactNode } from "react";

import { BorderlessTap, Box } from "../../components";
import { Theme } from "../../components/Theme";

interface Props {
  backgroundColor: BoxProps<Theme>["backgroundColor"];
  children: ReactNode;
  onPress: () => void;
}

const CardLayout = ({ onPress, backgroundColor, children }: Props) => {
  return (
    <BorderlessTap onPress={onPress}>
      <Box
        width={120}
        height={160}
        borderRadius="m"
        marginLeft="m"
        padding="m"
        backgroundColor={backgroundColor}
      >
        {children}
      </Box>
    </BorderlessTap>
  );
};

export default CardLayout;
