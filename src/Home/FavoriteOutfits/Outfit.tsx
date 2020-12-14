import React, { useState } from "react";

import { BorderlessTap, Box, RoundedIcon } from "../../components";

interface Props {
  outfit: {
    color: string;
    aspectRatio: number;
    id: number;
    selected: boolean;
  };
  width: number;
}

const Outfit = ({ outfit, width }: Props) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <BorderlessTap
      onPress={() => {
        setIsSelected((prev) => !prev);
        outfit.selected = !outfit.selected;
      }}
    >
      <Box
        borderRadius="m"
        marginBottom="m"
        alignItems="flex-end"
        padding="m"
        style={{
          backgroundColor: outfit.color,
          width,
          height: width * outfit.aspectRatio,
        }}
      >
        {isSelected && (
          <RoundedIcon
            name="check"
            backgroundColor="primary"
            color="white"
            size={24}
          />
        )}
      </Box>
    </BorderlessTap>
  );
};

export default Outfit;
