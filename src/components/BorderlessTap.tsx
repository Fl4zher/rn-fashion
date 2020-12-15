import React, { ReactNode } from "react";
import { State, TapGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated"; // useCode, // stopClock, // startClock, // set, // not, // neq, // greaterThan, // eq, // cond, // clockRunning, // call, // and, // add,
import {
  useClock,
  useTapGestureHandler,
  useValue,
} from "react-native-redash/lib/module/v1";

import { Text } from "./Theme";
interface Props {
  onPress: () => void;
  children: ReactNode;
}

const BorderlessTap = ({ children, onPress }: Props) => {
  // const clock = useClock();
  // const start = useValue(0);
  // const { gestureHandler, state } = useTapGestureHandler();
  // const opacity = useValue(0);
  // useCode(
  //   () => [
  //     cond(and(not(clockRunning(clock)), eq(state, State.BEGAN)), [
  //       startClock(clock),
  //       set(start, clock),
  //     ]),
  //     cond(neq(state, State.BEGAN), stopClock(clock)),
  //     cond(eq(state, State.FAILED), stopClock(clock)),
  //     cond(eq(state, State.END), [call([], onPress)]),
  //     set(
  //       opacity,
  //       cond(
  //         and(greaterThan(clock, add(start, 100)), clockRunning(clock)),
  //         0.5,
  //         1
  //       )
  //     ),
  //   ],
  //   []
  // );
  return <Text>BORDERLESS TAP</Text>;
  // return ()
  // return children;
  // return (
  //   // <TapGestureHandler {...gestureHandler}>
  //   <Animated.View>{children}</Animated.View>
  //   // </TapGestureHandler>
  // );
};

export default BorderlessTap;
