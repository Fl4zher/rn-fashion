import React from "react";
import { Image } from "react-native";

import { BorderlessTap, Box, Text } from "../../components";

import CardLayout from "./CardLayout";

export enum CardType {
  VISA,
  MASTERCARD,
}

export interface CardModel {
  id: number;
  type: CardType;
  last4digits: number;
  expiration: string;
}

interface Props {
  card: CardModel;
  selected: boolean;
  onSelect: () => void;
}

const Card = ({ card, selected, onSelect }: Props) => {
  return (
    <CardLayout
      onPress={onSelect}
      backgroundColor={selected ? "primary" : "background"}
    >
      <Box height={30}>
        <Image
          style={
            card.type === CardType.VISA
              ? { width: 39, height: 13 }
              : { width: 32, height: 20 }
          }
          source={
            card.type === CardType.VISA
              ? require("./assets/visa.png")
              : require("./assets/mastercard.png")
          }
        />
      </Box>
      <Text
        variant="title3"
        marginTop="m"
        marginBottom="s"
        color={selected ? "background" : "text"}
      >
        **** {card.last4digits}
      </Text>
      <Text opacity={0.5}>Expiration</Text>
      <Text color={selected ? "background" : "text"}>{card.expiration}</Text>
    </CardLayout>
  );
};

export default Card;
