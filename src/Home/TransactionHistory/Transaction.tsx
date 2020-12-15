import moment from "moment";
import React from "react";

import { Box, Text } from "../../components";

import { Point } from "./Graph";

interface Props {
  transaction: Point;
}

const Transaction = ({ transaction }: Props) => {
  return (
    <Box
      marginTop="l"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Box flexDirection="row" alignItems="center" marginBottom="s">
          <Box
            backgroundColor={transaction.color}
            marginRight="s"
            width={7}
            height={7}
            borderRadius="s"
          />
          <Text variant="title3">{`#${transaction.id}`}</Text>
        </Box>
        <Box>
          <Text color="darkGrey">{`$${transaction.value} - ${moment(
            transaction.date
          ).format("DD MMMM, YYYY")}`}</Text>
        </Box>
      </Box>
      <Box>
        <Text color="secondary" variant="button">
          See more
        </Text>
      </Box>
    </Box>
  );
};

export default Transaction;
