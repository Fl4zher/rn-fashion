import React from "react";

import { Box, Button, Container, Text } from "../../components";
import { AuthRoutes, StackNavigationProps } from "../../components/Navigation";
import SocialLogin from "../components/SocialLogin";

const Login = ({ navigation }: StackNavigationProps<AuthRoutes, "Login">) => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert("SIGNUP")}>
          <Box flexDirection="row" justifyContent="center">
            <Text color="white">Don't have an account?</Text>
            <Text marginLeft="s" color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{ footer }}>
      <Text>Login</Text>
    </Container>
  );
};

export default Login;
