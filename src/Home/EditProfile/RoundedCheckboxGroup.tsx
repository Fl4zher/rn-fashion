import React, { useState } from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Text, useTheme } from "../../components";

interface Props {
  options: { value: string }[];
  valueIsColor?: boolean;
}

const RoundedCheckboxGroup = ({ options, valueIsColor }: Props) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const theme = useTheme();
  return (
    <Box flexDirection="row" flexWrap="wrap" marginTop="m">
      {options.map((option) => {
        const index = selectedValues.indexOf(option.value);
        const isSelected = index !== -1;
        const defaultBackgroundColor = isSelected
          ? theme.colors.primary
          : theme.colors.background2;
        const backgroundColor = valueIsColor
          ? option.value
          : defaultBackgroundColor;
        return (
          <BorderlessButton
            key={option.value}
            onPress={() => {
              if (isSelected) {
                selectedValues.splice(index, 1);
              } else {
                selectedValues.push(option.value);
              }
              setSelectedValues([...selectedValues]);
            }}
          >
            <Box
              width={50}
              height={50}
              justifyContent="center"
              alignItems="center"
              style={{
                borderRadius: 25,
                borderWidth: isSelected ? 1 : 0,
                borderColor: backgroundColor,
                marginBottom: theme.spacing.m,
                marginRight: theme.spacing.s,
              }}
            >
              <Box
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: backgroundColor,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {!valueIsColor ? (
                  <Text
                    textAlign="center"
                    variant="header"
                    color={isSelected ? "background" : "text"}
                  >
                    {option.value.toUpperCase()}
                  </Text>
                ) : (
                    isSelected && <Icon color="white" name="check" size={16} />
                  )}
              </Box>
            </Box>
          </BorderlessButton>
        );
      })}
    </Box>
  );
};

export default RoundedCheckboxGroup;
