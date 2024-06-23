import { background, extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./button";
import { inputTheme } from "./input";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const breakPoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "1280px",
};

const styles = {
  global: {
    body: {
      fontSize: "14px",
      fontWeight: "500",
      bg: "#141414",
    },
    p: {
      fontSize: "14px",
      fontWeight: "500",
    },
    input: {
      fontSize: "14px",
      fontWeight: "500",
    },
  },
};

const colors = {
  //color primary of Uniswap
  primary: "#1C1C1C",
  //color secondary of Uniswap
  secondary: "#F2F2F2",
  //color text of Uniswap
  text: "#333333",
  //color border of Uniswap
  border: "#E5E5E5",
  //color button of Uniswap
  button: "#FF007A",
  //color button hover of Uniswap
  buttonHover: "#FF007A",
  //color background of Uniswap
  background: "#FFFFFF",
  //color background card of Uniswap
  backgroundCard: "#F9F9F9",
  //color background input of Uniswap
  backgroundInput: "#F9F9F9",
  //color background input focus of Uniswap
  backgroundInputFocus: "#FFFFFF",
  //color background input hover of Uniswap
  backgroundInputHover: "#FFFFFF",
  //color background modal of Uniswap
  backgroundModal: "#FFFFFF",
  //color background modal of Uniswap
};

const fonts = {
  heading: "Roboto",
  body: "Roboto",
};
const theme = extendTheme({
  fonts,
  colors,
  config,
  styles,
  breakPoints,
  components: { Button: buttonTheme, Input: inputTheme },
});

export default theme;
