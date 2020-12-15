import React, { useState } from "react";

import { Box, Button, useTheme } from "../../components";

interface Props {
  options: { value: string; label: string }[];
  radio?: boolean;
}

const CheckboxGroup = ({ options, radio }: Props) => {
  const theme = useTheme();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return (
    <Box flexDirection="row" flexWrap="wrap" marginTop="m">
      {options.map((option) => {
        const index = selectedValues.indexOf(option.value);
        const isSelected = index !== -1;
        return (
          <Button
            key={option.value}
            variant={isSelected ? "primary" : "default"}
            onPress={() => {
              if (radio) {
                setSelectedValues([option.value]);
              } else {
                if (isSelected) {
                  selectedValues.splice(index, 1);
                } else {
                  selectedValues.push(option.value);
                }
                setSelectedValues([...selectedValues]);
              }
            }}
            label={option.label}
            style={{
              padding: 16,
              height: "auto",
              width: "auto",
              marginBottom: theme.spacing.m,
              marginRight: theme.spacing.s,
            }}
          />
        );
      })}
    </Box>
  );
};

export default CheckboxGroup;
