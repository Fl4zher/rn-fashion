import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Box, Button, Text } from "../../components";

import AddCard from "./AddCard";
import Card, { CardModel, CardType } from "./Card";

interface Props {
  minHeight: number;
}

const cards: CardModel[] = [
  {
    id: 0,
    type: CardType.VISA,
    last4digits: 4324,
    expiration: "05/24",
  },
  {
    id: 1,
    type: CardType.MASTERCARD,
    last4digits: 2323,
    expiration: "02/22",
  },
  {
    id: 2,
    type: CardType.MASTERCARD,
    last4digits: 3232,
    expiration: "04/22",
  },
];

interface LineItemProps {
  label: string;
  value: number;
}

const LineItem = ({ label, value }: LineItemProps) => (
  <Box flexDirection="row" paddingVertical="m">
    <Box flex={1}>
      <Text color="background" variant="title3">
        {label}
      </Text>
    </Box>
    <Box>
      <Text color="primary" variant="title3">
        {value},-
      </Text>
    </Box>
  </Box>
);

const Checkout = ({ minHeight }: Props) => {
  const [selectedCard, setSelectedCard] = useState(cards[0].id);
  return (
    <Box flex={1} backgroundColor="secondary" style={{ paddingTop: minHeight }}>
      <Box flex={1} padding="m">
        <Box>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 50 }}
          >
            <AddCard />
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                selected={selectedCard === card.id}
                onSelect={() => setSelectedCard(card.id)}
              />
            ))}
          </ScrollView>
        </Box>
        <Box marginTop="xl">
          <Text color="background" variant="title3" marginBottom="m">
            Delivery address
          </Text>
          <Box flexDirection="row" opacity={0.5} paddingVertical="m">
            <Box flex={1}>
              <Text color="background">Sintrupvej 30</Text>
              <Text color="background">8220, Brabrand</Text>
            </Box>
            <Box justifyContent="center" alignItems="center">
              <Text color="background">Change</Text>
            </Box>
          </Box>
        </Box>
        <Box marginTop="xl">
          <LineItem label="Total Items (6)" value={123.23} />
          <LineItem label="Standard Delivery" value={13} />
          <LineItem label="Total Payment" value={136.23} />
        </Box>
        <Box
          justifyContent="flex-end"
          flex={1}
          alignItems="center"
          paddingVertical="l"
        >
          <Button label="Pay 136,-" variant="primary" onPress={() => true} />
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
