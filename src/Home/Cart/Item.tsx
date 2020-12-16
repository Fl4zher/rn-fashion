import React from "react";

import { Box, Text, useTheme } from "../../components";

import SwipeableRow from "./SwipeableRow";

interface Props {
  onDelete: () => void;
}

const Item = ({ onDelete }: Props) => {
  const theme = useTheme();
  const height = 120 + theme.spacing.m * 2;
  return (
    <SwipeableRow onDelete={onDelete} height={height}>
      <Box padding="m" flexDirection="row">
        <Box
          width={120}
          height={120}
          borderRadius="m"
          style={{ backgroundColor: "#BFEAF5", opacity: 0.5 }}
        />
        <Box paddingHorizontal="m" flex={1} justifyContent="center">
          <Text variant="header" color="info">
            Size M, L
          </Text>
          <Text variant="title3" marginBottom="s">
            Kilic Oregano 700g
          </Text>
          <Text variant="title3" color="primary">
            234,23,-
          </Text>
        </Box>
        <Box justifyContent="center">
          <Box
            backgroundColor="secondary"
            borderRadius="l"
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 24,
              height: 24,
              borderRadius: 12,
            }}
          >
            <Text variant="header" color="background">
              x2
            </Text>
          </Box>
        </Box>
      </Box>
    </SwipeableRow>
  );
};

export default Item;
