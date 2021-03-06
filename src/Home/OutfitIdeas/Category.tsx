import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text } from "../../components";

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

export type ICategory = {
  id: string;
  color: string;
  title: string;
};

interface Props {
  category: ICategory;
}

const Category = ({ category: { color, title } }: Props) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessButton onPress={() => setSelected((prev) => !prev)}>
      <Box marginHorizontal="m" marginTop="s" alignItems="center">
        <Box
          justifyContent="center"
          alignItems="center"
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
        >
          {selected && (
            <Box
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: color,
                borderWidth: 2,
              }}
            />
          )}
          <Box
            style={{
              width: INNER_RADIUS * 2,
              height: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor: color,
            }}
          />
        </Box>
        <Text textAlign="center" marginTop="s">
          {title}
        </Text>
      </Box>
    </BorderlessButton>
  );
};

export default Category;
