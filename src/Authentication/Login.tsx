import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { TextInput as RNTextInput } from "react-native";

import { Box, Button, Container, Text } from "../components";
import { AuthRoutes, StackNavigationProps } from "../components/Navigation";

import Checkbox from "./components/Form/Checkbox";
import TextInput from "./components/Form/TextInput";
import Footer from "./components/Footer";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({ navigation }: StackNavigationProps<AuthRoutes, "Login">) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: false },
    onSubmit: (values) => console.log(values),
  });

  const password = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up Here"
      onPress={() => navigation.navigate("Signup")}
    />
  );
  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" opacity={0.5} textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your email"
              onBlur={handleBlur("email")}
              onChangeText={handleChange("email")}
              error={errors.email}
              touched={touched.email}
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyType="next"
              returnKeyLabel="nexts"
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <TextInput
            ref={password}
            icon="lock"
            placeholder="Enter your password"
            onBlur={handleBlur("password")}
            onChangeText={handleChange("password")}
            error={errors.password}
            touched={touched.password}
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
            secureTextEntry
          />
          <Box
            flexDirection="row"
            justifyContent="space-between"
            marginTop="l"
            marginBottom="m"
          >
            <Checkbox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue("remember", !values.remember)}
            />
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text color="primary">Forgot password?</Text>
            </TouchableWithoutFeedback>
          </Box>

          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Log into your account"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
