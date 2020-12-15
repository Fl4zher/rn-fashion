import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Box, Header, makeStyles, Text } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import { Theme } from "../../components/Theme";

import Graph, { Point } from "./Graph";
import TopCurve from "./TopCurve";
import Transaction from "./Transaction";

const footherHeight = Dimensions.get("window").width / 3;
const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
    backgroundColor: "black",
  },
  scrollView: {
    paddingBottom: footherHeight,
  },
}));

const aspectRatio = 3;

const startDate = new Date("2019-11-01").getTime();
const numberOfMonths = 6;
const data: Point[] = [
  {
    date: new Date("2019-11-01").getTime(),
    value: 2,
    color: "darkGrey",
    id: 34,
  },
  {
    date: new Date("2019-12-01").getTime(),
    value: 50,
    color: "orange",
    id: 435,
  },
  {
    date: new Date("2020-02-01").getTime(),
    value: 200,
    color: "primary",
    id: 65489,
  },
  {
    date: new Date("2020-03-01").getTime(),
    value: 100,
    color: "secondary",
    id: 6432,
  },
  {
    date: new Date("2020-04-01").getTime(),
    value: 500,
    color: "danger",
    id: 5745,
  },
];

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  const styles = useStyles();
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => true }}
        title="Transaction History"
        dark
      />
      <Box padding="m" flex={1}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box>
            <Text variant="header" color="darkGrey">
              TOTAL SPEND
            </Text>
            <Text color="secondary" variant="title1">
              $619,19
            </Text>
          </Box>
          <Box
            backgroundColor="primaryLight"
            borderRadius="m"
            padding="m"
            justifyContent="center"
          >
            <Text color="primary">All Time</Text>
          </Box>
        </Box>
        <Graph
          data={data}
          startDate={startDate}
          numberOfMonths={numberOfMonths}
        />
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {data.map((transaction, index) => (
            <Transaction key={index} transaction={transaction} />
          ))}
        </ScrollView>
      </Box>
      <TopCurve footerHeight={footherHeight} />
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        height={footherHeight}
      >
        <Image
          style={styles.footer}
          source={require("../../components/assets/patterns/7.png")}
        />
      </Box>
    </Box>
  );
};

export default TransactionHistory;
