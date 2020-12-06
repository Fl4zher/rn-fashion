import React from "react";

import { Box, Button, Container, Text, } from "../../components";
import { AuthRoutes, StackNavigationProps } from "../../components/Navigation";
import Checkbox from "../components/Form/Checkbox";
import TextInput from "../components/Form/TextInput";
import SocialLogin from "../components/SocialLogin";
import { Formik } from 'formik';

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
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" opacity={0.5} textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={values => console.log(values)}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput icon="mail" placeholder="Enter your email" onBlur={handleBlur('email')} onChangeText={handleChange('email')} />
              </Box>
              <TextInput icon="lock" placeholder="Enter your password" onBlur={handleBlur('password')} onChangeText={handleChange('password')} />
              <Box flexDirection="row" justifyContent="space-between">
                <Checkbox label="Remember me" />
                <Button variant="transparent" onPress={() => { }}>
                  <Text color="primary">Forgot password?</Text>
                </Button>
              </Box>

              <Box alignItems="center" marginTop="m">
                <Button variant="primary" onPress={handleSubmit} label="Log into your account" />
              </Box>

            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
