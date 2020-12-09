import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput as RNTextInput } from "react-native";

import { Box, Button, Container, Text } from "../components";
import { AuthRoutes, StackNavigationProps } from "../components/Navigation";

import TextInput from "./components/Form/TextInput";
import Footer from "./components/Footer";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords don't match")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Signup = ({ navigation }: StackNavigationProps<AuthRoutes, "Signup">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: SignupSchema,
      initialValues: {
        email: "",
        password: "",
        passwordConfirmation: "",
        remember: false,
      },
      onSubmit: (values) => console.log(values),
    }
  );

  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Already have an account?"
      action="Login Here"
      onPress={() => navigation.navigate("Login")}
    />
  );
  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create account
        </Text>
        <Text variant="body" opacity={0.5} textAlign="center" marginBottom="l">
          Type your name, email and your password
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

          <Box marginBottom="m">
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
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => passwordConfirmation.current?.focus()}
              secureTextEntry
            />
          </Box>
          <TextInput
            ref={passwordConfirmation}
            icon="lock"
            placeholder="Confirm your password"
            onBlur={handleBlur("passwordConfirmation")}
            onChangeText={handleChange("passwordConfirmation")}
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
            secureTextEntry
          />

          <Box alignItems="center" marginTop="l">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Create your account"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
