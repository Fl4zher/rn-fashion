import React from "react";
import { Linking } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Box, Button, Container, Text } from "../components";
import { AuthNavigationProps } from "../components/Navigation";

import Footer from "./components/Footer";
import TextInput from "./components/Form/TextInput";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: SignupSchema,
      initialValues: {
        email: "",
      },
      onSubmit: () => navigation.navigate("PasswordChanged"),
    }
  );

  const footer = (
    <Footer
      title="Don't work?"
      action="Try another way"
      onPress={() => Linking.openURL("mailto:help@novusweb.dk")}
    />
  );
  return (
    <Container pattern={0} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Forgot password?
      </Text>
      <Text variant="body" opacity={0.5} textAlign="center" marginBottom="l">
        Enter the email address associated with your account
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
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>

        <Box alignItems="center" marginTop="l">
          <Button
            variant="primary"
            onPress={handleSubmit}
            label="Reset password"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
