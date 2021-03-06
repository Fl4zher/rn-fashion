/* eslint-disable max-len */
import React, { ReactNode } from "react";
import Svg, { Path } from "react-native-svg";

import { Box, useTheme } from "../../components";

const GoogleLogo = () => (
  <Svg viewBox="0 0 533.5 544.3">
    <Path
      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
      fill="#4285f4"
    />
    <Path
      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
      fill="#34a853"
    />
    <Path
      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
      fill="#fbbc04"
    />
    <Path
      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
      fill="#ea4335"
    />
  </Svg>
);

const FacebookLogo = () => (
  <Svg viewBox="0 0 512 512">
    <Path
      d="M134.941 272.691h56.123v231.051a8.256 8.256 0 008.258 8.258h95.159a8.256 8.256 0 008.258-8.258V273.78h64.519a8.26 8.26 0 008.204-7.315l9.799-85.061a8.259 8.259 0 00-8.202-9.203h-74.316V118.88c0-16.073 8.654-24.224 25.726-24.224h48.59a8.258 8.258 0 008.258-8.258V8.319a8.256 8.256 0 00-8.258-8.258h-66.965A65.863 65.863 0 00307.027 0c-11.619 0-52.006 2.281-83.909 31.63-35.348 32.524-30.434 71.465-29.26 78.217v62.352H134.94a8.256 8.256 0 00-8.258 8.258v83.975a8.26 8.26 0 008.259 8.259z"
      fill="#385c8e"
    />
  </Svg>
);

const AppleLogo = () => (
  <Svg viewBox="0 0 305 305">
    <Path
      fill="#000"
      d="M40.738 112.119c-25.785 44.745-9.393 112.648 19.121 153.82C74.092 286.523 88.502 305 108.239 305c.372 0 .745-.007 1.127-.022 9.273-.37 15.974-3.225 22.453-5.984 7.274-3.1 14.797-6.305 26.597-6.305 11.226 0 18.39 3.101 25.318 6.099 6.828 2.954 13.861 6.01 24.253 5.815 22.232-.414 35.882-20.352 47.925-37.941 12.567-18.365 18.871-36.196 20.998-43.01l.086-.271a2.5 2.5 0 00-1.328-3.066c-.032-.015-.15-.064-.183-.078-3.915-1.601-38.257-16.836-38.618-58.36-.335-33.736 25.763-51.601 30.997-54.839l.244-.152a2.498 2.498 0 00.71-3.511c-18.014-26.362-45.624-30.335-56.74-30.813a50.043 50.043 0 00-4.95-.242c-13.056 0-25.563 4.931-35.611 8.893-6.936 2.735-12.927 5.097-17.059 5.097-4.643 0-10.668-2.391-17.645-5.159-9.33-3.703-19.905-7.899-31.1-7.899-.267 0-.53.003-.789.008-26.03.383-50.626 15.275-64.186 38.859z"
    />
    <Path
      fill="#000"
      d="M212.101.002c-15.763.642-34.672 10.345-45.974 23.583-9.605 11.127-18.988 29.679-16.516 48.379a2.499 2.499 0 002.284 2.164c1.064.083 2.15.125 3.232.126 15.413 0 32.04-8.527 43.395-22.257 11.951-14.498 17.994-33.104 16.166-49.77a2.515 2.515 0 00-2.587-2.225z"
    />
  </Svg>
);

interface SocailIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocailIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;
  return (
    <Box
      marginHorizontal="m"
      backgroundColor="background"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
      padding="m"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <FacebookLogo />
      </SocialIcon>
      <SocialIcon>
        <GoogleLogo />
      </SocialIcon>
      <SocialIcon>
        <AppleLogo />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
